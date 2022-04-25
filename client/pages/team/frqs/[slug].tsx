import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { serialize } from "next-mdx-remote/serialize";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import { MDXWrapper } from "../../../components/md";

interface Post {
  title: string;
  date: string;
  slug: string;
  author: { name: string; picture: string; github: string };
  content: string;
  ogImage: { url: string };
  coverImage: string;
}

interface Props {
  source: string;
  post: Post;
  morePosts: Object[];
  preview: string;
}

export default function Post({ source, post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return <MDXWrapper source={source} post={post} />;
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug({
    route: "team/frqs/",
    slug: params.slug,
    fields: [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
    ],
  });

  const content = await serialize(post.content);

  return {
    props: {
      source: content,
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts({ route: "team/frqs/", fields: ["slug"] });
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

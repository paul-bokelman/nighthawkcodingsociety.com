import React from "react";
import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { components } from "./components";

import { BsGithub } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

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
  post: Post;
  source: {
    compiledSource: string;
    scope: Object;
  };
  children: React.ReactChild[];
}

export const MDXWrapper = ({ post, source, children }: Props) => {
  return (
    <div className="w-full mt-4 mb-20">
      <Head>
        <title>{post.title}</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <div className="flex justify-center w-full lg:w-3/4 mx-auto">
        <div className="max-w-full">
          <article className="prose dark:prose-dark prose-sm md:prose-lg">
            <h1>{post.title}</h1>
            <Author author={post.author} />
            <MDXRemote {...source} components={components} />
          </article>
        </div>
      </div>
    </div>
  );
};

const Author = ({ author }: { author: Post["author"] }) => (
  <div className="block">
    <a
      href={`https://github.com/${author.github}`}
      className="!no-underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="inline-flex flex-row items-center justify-start gap-2 mb-4 -mt-3 group cursor-pointer">
        <Image
          src={author.picture}
          alt={author.name}
          height={40}
          width={40}
          className="rounded-full"
        />
        <div className="relative h-full flex flex-col items-start">
          <div className="flex flex-row items-center font-bold text-gray-400 uppercase text-xs">
            <p className="!my-0 mr-1">Author</p>
            <BsGithub className="!my-0 mr-1" />
            <div className="inline-block overflow-hidden">
              <FaLongArrowAltRight className="relative transform -translate-x-4 group-hover:translate-x-0 text-base transition duration-50 ease-in-out" />
            </div>
          </div>
          <p className="font-bold !-my-1 ">{author.name}</p>
        </div>
      </div>
    </a>
  </div>
);

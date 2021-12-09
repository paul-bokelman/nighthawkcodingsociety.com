import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsHeartFill } from "react-icons/bs";
import axios from "axios";

interface Props {
  route: string;
}

export const Likes = (props: Props) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState(null);
  const router = useRouter();
  const p = router.pathname.split("/");
  const route = p[p.length - 1];

  const like = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:5000/like?route=${route}`
      );
      setLiked(true);
      setLikes(data.likes);
    } catch (error) {
      setLiked(false);
      console.log(error);
    }
  }, [route]);

  const getLikes = useCallback(async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:5000/getLikes?route=${route}`
    );
    setLikes(data.likes);
  }, [route]);

  useEffect(() => {
    getLikes();
  }, [like, getLikes]);

  return (
    <div
      onClick={liked ? () => console.log("already liked") : like}
      className={`${
        liked ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"
      } inline-block cursor-pointer px-4 rounded-xl`}
    >
      <BsHeartFill className="mr-2 inline" />
      <p className="uppercase text-sm inline font-bold">{likes}</p>
    </div>
  );
};

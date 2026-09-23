"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  function handleClick() {
    setLikes((prev) => prev + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="w-fit rounded-full bg-rose-50 px-5 py-2.5 font-semibold text-rose-600 transition-colors hover:bg-rose-100 active:scale-95"
    >
      ❤ {likes}
    </button>
  );
}

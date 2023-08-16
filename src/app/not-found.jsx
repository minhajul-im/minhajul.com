"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const route = useRouter();

  return (
    <div className=".screen flex flex-col items-center justify-center text-white h-screen">
      Page isn&apos;t Found......
      <button
        className=" text-blue-500 underline cursor-pointer"
        onClick={() => route.push("/")}
      >
        go to home
      </button>
    </div>
  );
};

export default NotFound;

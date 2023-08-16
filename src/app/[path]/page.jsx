"use client";

import { useRouter } from "next/navigation";

const RandomURL = ({ params }) => {
  const route = useRouter();

  return (
    <div className=".screen flex flex-col items-center justify-center text-white h-screen">
      url is not valid click the bottom...
      <samp className="text-red-600 text-3xl">{params.path}</samp>
      <button
        className=" text-blue-500 underline cursor-pointer"
        onClick={() => route.push("/")}
      >
        go to home
      </button>
    </div>
  );
};

export default RandomURL;

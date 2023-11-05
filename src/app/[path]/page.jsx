"use client";

import { useRouter } from "next/navigation";

const RandomURL = ({ params }) => {
  const route = useRouter();

  return (
    <section className=".screen flex flex-col items-center justify-center text-white h-screen">
      <h1 className="text-amber-800 text-8xl font-bold font-mono pb-10">
        Oopss🙊🙊
      </h1>
      <h4 className="text-2xl font-semibold text-gray-100 pb-8">
        Something is wrong!😅😅😅
      </h4>
      <samp className="text-red-600 text-3xl py-6">{params.path}</samp>
      <button
        className="text-purple-600 underline cursor-pointer my-2"
        onClick={() => route.push("/")}
      >
        go to profile
      </button>
    </section>
  );
};

export default RandomURL;

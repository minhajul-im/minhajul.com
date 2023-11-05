"use client";

import { useRouter } from "next/navigation";

const Error = () => {
  const route = useRouter();

  return (
    <div className=".screen flex flex-col items-center justify-center text-white h-screen">
      <h1 className="text-4xl text-red-700">error page</h1>

      <button
        className=" text-blue-500 underline cursor-pointer"
        onClick={() => route.push("/")}
      >
        go to home
      </button>
    </div>
  );
};

export default Error;

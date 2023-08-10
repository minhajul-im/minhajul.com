import Image from "next/image";

const Img = () => {
  return (
    <Image
      className="rounded-full mb-6 hover:ease-in hover:duration-300 "
      alt="minhajul"
      src={"/minhajul.png"}
      width={200}
      height={200}
    />
  );
};

export default Img;

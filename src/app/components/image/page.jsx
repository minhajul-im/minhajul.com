import Image from "next/image";

const Img = () => {
  return (
    <Image
      className="rounded-full mb-6 cursor-grabbing"
      alt="minhajul"
      src={"/minhajul.png"}
      width={200}
      height={200}
    />
  );
};

export default Img;

import Image from "next/image";
import iconsAndLinks from "@/db/data";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = () => {
  return (
    <div className="flex items-center gap-6 justify-center">
      {iconsAndLinks.map((item) => (
        <a
          className="hover:text-purple-600"
          key={item.id}
          href={item.link}
          target="_blank"
        >
          <FontAwesomeIcon icon={item.name} style={{ fontSize: 35 }} />
        </a>
      ))}

      <a href="https://leetcode.com/minhajul-im/" target="_blank">
        <Image src="/LeetCode.png" alt="leet code" height={42} width={42} />
      </a>
    </div>
  );
};

export default Icon;

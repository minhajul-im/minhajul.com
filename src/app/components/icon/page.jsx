import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// all data
const links = [
  {
    id: 1,
    name: faLinkedinIn,
    link: "https://www.linkedin.com/in/minhajul-im/",
  },
  {
    id: 2,
    name: faGithub,
    link: "https://github.com/minhajul-im",
  },
  {
    id: 3,
    name: faFacebook,
    link: "https://www.facebook.com/minhajul.im",
  },
  {
    id: 4,
    name: faTwitter,
    link: "https://twitter.com/minhajul_im",
  },
  {
    id: 5,
    name: faInstagram,
    link: "https://www.instagram.com/minhajul.im/",
  },
];

const Icon = () => {
  return (
    <div className="flex items-center gap-6 justify-center">
      {/* social links logo  */}
      {links.map((item) => (
        <a key={item.id} href={item.link} target="_blank">
          <FontAwesomeIcon icon={item.name} style={{ fontSize: 35 }} />
        </a>
      ))}

      {/* leet code link log  */}
      <a href="https://leetcode.com/minhajul-im/" target="_blank">
        <Image
          src="/LeetCode_logo_rvs.png"
          alt="leet code"
          height={42}
          width={42}
        />
      </a>
    </div>
  );
};

export default Icon;

"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

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
];

const Icon = () => {
  return (
    <div className="flex items-baseline gap-6">
      {links.map((item) => (
        <a key={item.id} href={item.link} target="_blank">
          <FontAwesomeIcon icon={item.name} style={{ fontSize: 35 }} />
        </a>
      ))}
    </div>
  );
};

export default Icon;

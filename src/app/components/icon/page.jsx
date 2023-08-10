"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLaptop,
  faCode,
  faProcedures,
  faAddressBook,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const links = [
  {
    id: 1,
    name: faLinkedinIn,
    link: "https://www.linkedin.com/in/minhajul-im/",
  },
  {
    id: 2,
    name: faCode,
    link: "https://github.com/minhajul-im",
  },
  {
    id: 3,
    name: faProcedures,
    link: "",
  },
  {
    id: 4,
    name: faFacebook,
    link: "https://www.facebook.com/minhajul.im",
  },
  {
    id: 5,
    name: faGauge,
    link: "https://twitter.com/minhajul_im",
  },
];

const Icon = () => {
  return (
    <div className="flex items-baseline gap-6">
      {links.map((item) => (
        <a key={item.id} href={item.link} target="_blank">
          <FontAwesomeIcon
            icon={item.name}
            // className="text-2xl text-blue-500"
            style={{ fontSize: 35 }}
          />
        </a>
      ))}
    </div>
  );
};

export default Icon;

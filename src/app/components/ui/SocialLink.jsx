import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const fbLink = "https://www.facebook.com/samnang.khon.77";
  const fbImg = "Facebook.png";
  const linkImg = "LinkedIn.png";
  const linkLink = "https://www.linkedin.com/in/khon-samnang-cyber/";
  const telImg = "Telegram App.png";
  const telLink = "https://t.me/Jsamnang";
  const gitImg = "GitHub.png";
  const gitLink = "https://github.com/samnangMYC";

  return (
    <div className="flex justify-center lg:justify-start h-24 items-center ">
      <Link href={fbLink} className="">
        <motion.button whileHover={{ scale: 1.1 }}>
          <img src={fbImg} alt="Facebook Icon" />
        </motion.button>
      </Link>

      <Link href={linkLink}>
        <motion.button whileHover={{ scale: 1.1 }}>
          <img src={linkImg} alt="LinkedIn Icon" className=" " />
        </motion.button>
      </Link>

      <Link href={telLink}>
        <motion.button whileHover={{ scale: 1.1 }}>
          <img src={telImg} alt="Telegram Icon" className=" " />
        </motion.button>
      </Link>

      <Link href={gitLink}>
        <motion.button whileHover={{ scale: 1.1 }}>
          <img src={gitImg} alt="GitIcon" className=" " />
        </motion.button>
      </Link>
    </div>
  );
};

export default SocialLinks;

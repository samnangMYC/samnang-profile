import React from "react";
import Link from "next/link";

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
        <img src={fbImg} alt="Facebook Icon" className=" " />
      </Link>
      <Link href={linkLink}>
        <img src={linkImg} alt="LinkedIn Icon" className=" " />
      </Link>
      <Link href={telLink}>
        <img src={telImg} alt="Telegram Icon" className=" " />
      </Link>
      <Link href={gitLink}>
        <img src={gitImg} alt="GitIcon" className=" " />
      </Link>
    </div>
  );
};

export default SocialLinks;

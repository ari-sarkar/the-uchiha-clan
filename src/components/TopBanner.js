import React, { useEffect } from "react";
import gsap from "gsap";
import "../Stylesheets/TopBanner.css";
import shisui from "../Media/uchiha-banner-images/1.png";
import obito from "../Media/uchiha-banner-images/2.png";
import sauske from "../Media/uchiha-banner-images/3.png";
import madara from "../Media/uchiha-banner-images/4.png";
import hitachi from "../Media/uchiha-banner-images/5.png";
import background from "../Media/uchiha-banner-images/topbanner-background.png";
const TopBanner = () => {
  useEffect(() => {
    const animateIn = gsap.timeline({ delay: 1 });
    animateIn.to(".topbanner-text-headline", { opacity: 1, translateY: -210 });
    animateIn.from(
      ".background",
      { css: { filter: "brightness(100%) blur(0px)" } },
      "-=0.6"
    );
    animateIn.to(
      ".background",
      { css: { filter: "brightness(30%) blur(5px)" }, ease: "power1" },
      "-=0.6"
    );
    animateIn.to(".shisui", { opacity: 1, ease: "power1" });
    animateIn.to(".obito", { opacity: 1, ease: "power1" });
    animateIn.to(".sauske", { opacity: 1, ease: "power1" });
    animateIn.to(".madara", { opacity: 1, ease: "power1" });
    animateIn.to(".hitachi", { opacity: 1, ease: "power1" });
    animateIn.to(".quickIntro", {
      opacity: 1,
      ease: "power1",
      translateY: -250,
    });
    animateIn.to(
      ".Introduction",
      { opacity: 1, ease: "power1", translateY: -250 },
      "+=0.5"
    );
    animateIn.from(
      ".topbanner-images-wrapper",
      { css: { filter: "brightness(100%) blur(0px)" } },
      "-=0.6"
    );
    animateIn.to(
      ".topbanner-images-wrapper",
      { css: { filter: "brightness(20%) blur(2px)" }, ease: "power1" },
      "-=0.6"
    );
  }, []);
  return (
    <section id="uchihaBanner">
      <div className="topbanner-wrapper">
        <img
          alt="topbanner-background"
          src={background}
          className="background"
        ></img>
        <div className="topbanner-images-wrapper">
          <img src={shisui} alt="shisui" className="shisui"></img>
          <img src={obito} alt="obito" className="obito"></img>
          <img src={sauske} alt="sauske" className="sauske"></img>
          <img src={madara} alt="madara" className="madara"></img>
          <img src={hitachi} alt="hitachi" className="hitachi"></img>
        </div>
        <div className="topbanner-text-wrapper">
          <div className="topbanner-text-headline">
            <h1>The Uchiha Clan</h1>
          </div>
          <div className="quickIntro">
            <h2>A Quick Introduction</h2>
          </div>
          <div className="Introduction">
            <h3>
              In the Anime Naruto Shipuddin The Uchihas are Known for Their
              Visual Powers. They Possess Powerfull Eyes which Lets them do
              things that normal people Cant. Today we are gonna look into the
              Uchiha Clan and Know about their eyes and their Powers. Their eyes
              are called <span className="sharingan-text">Sharingan...</span>
              <svg
                width="100"
                height="100"
                id="mouse"
                viewBox="0 -6 50 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: 70, height: 70 }}
              >
                <rect
                  className="stroke1 fill1"
                  x="1"
                  y="1"
                  width="53"
                  height="84"
                  rx="30"
                  fill="rgba(10,9,9,1)"
                  stroke="rgba(255,255,255,1)"
                  strokeWidth="2.4px"
                  style={{ animationDuration: 2 }}
                ></rect>
                <line
                  className="line-mouse2 stroke2"
                  x1="28"
                  y1="11"
                  x2="28"
                  y2="26"
                  stroke="red"
                  strokeWidth="2.4px"
                  style={{ animationDuration: 2 }}
                ></line>
              </svg>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TopBanner;

import React, { useEffect } from "react";
import "../Stylesheets/EyeEvolution.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import normalEye from "../Media/eyeMod/normalEye.png";
import oneTomoea from "../Media/eyeMod/oneTomoea.png";
import twoTomoea from "../Media/eyeMod/twoTomoea.png";
import threeTomoea from "../Media/eyeMod/threeTomoea.png";
gsap.registerPlugin(ScrollTrigger);
const EyeEvolution = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#EyeEvolution",
        ease: "Power1.out",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        toggleActions: "play pause reverse reverse",
        // markers: {startColor: "white", endColor: "blue", fontSize: "18px"},
      },
    });
    tl.fromTo(".eyeEvolution-cover-text",{autoAlpha:0, translateY: 100},{autoAlpha: 1, translateY: -100, stagger: 1});
    tl.fromTo(".eyeEvolution-cover", {autoAlpha: 1},{autoAlpha: 0, delay: 1});
    tl.fromTo(".snapshot-text-wrapper", { autoAlpha: 0 }, { autoAlpha: 1, delay: 1});
    tl.fromTo(".st1-eyemod", { fill: "#000000" }, { fill: "#ff0000" }, "+=0.5");
    tl.fromTo(
      ".normal-eye",
      { autoAlpha: 1 },
      { autoAlpha: 0, translateY: -80 },
      "-=0.5"
    );
    tl.to(".circle", { autoAlpha: 1, stagger: 0.5 }, "-=0.8");
    tl.fromTo(
      ".one-tomoea",
      { autoAlpha: 0 },
      { autoAlpha: 1, translateY: -150 },
      "-=0.8"
    );
    tl.fromTo(
      "#Spin-eyemod",
      { rotation: 0 },
      { rotation: 4800, transformOrigin: "50% 50%", duration: 5 }
    );
    tl.fromTo(".one-tomoea", { autoAlpha: 1 }, { autoAlpha: 0 }, "-=4.6");
    tl.fromTo(
      ".snapshot-text-wrapper1",
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      "-=6.1"
    );
    tl.to(".circle1", { autoAlpha: 1, stagger: 0.5 }, "-=6.1");
    tl.fromTo("#eye-curve2", { autoAlpha: 0 }, { autoAlpha: 1 }, "-=4.5");
    tl.fromTo(
      ".two-tomoea",
      { autoAlpha: 0 },
      { autoAlpha: 1, translateY: -280 },
      "-=4.5"
    );
    tl.fromTo(
      ".snapshot-text-wrapper2",
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      "-=4.7"
    );
    tl.to(".circle2", { autoAlpha: 1, stagger: 0.5 }, "-=4.7");
    tl.fromTo(".two-tomoea", { autoAlpha: 1 }, { autoAlpha: 0 }, "-=3.5");
    tl.fromTo(
      ".three-tomoea",
      { autoAlpha: 0 },
      { autoAlpha: 1, translateY: -400 },
      "-=3.5"
    );
    tl.fromTo(
      ".snapshot-text-wrapper3",
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      "-=3.5"
    );
    tl.fromTo("#eye-curve3", { autoAlpha: 0 }, { autoAlpha: 1 }, "-=3.5");
  }, []);
  return (
    <section id="EyeEvolution">
      <div id="snapshot">
        <div className="snapshot-text-wrapper">
          <img alt="normal-eye" src={normalEye}></img>
          <span className="snapshot-text">Normal</span>
        </div>
        <div className="circles">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
        <div className="snapshot-text-wrapper1">
          <img alt="normal-eye" src={oneTomoea}></img>
          <span className="snapshot-text">One Tomoe</span>
        </div>
        <div className="circles">
          <div className="circle1" />
          <div className="circle1" />
          <div className="circle1" />
        </div>
        <div className="snapshot-text-wrapper2">
          <img alt="normal-eye" src={twoTomoea}></img>
          <span className="snapshot-text">Two Tomoe</span>
        </div>
        <div className="circles">
          <div className="circle2" />
          <div className="circle2" />
          <div className="circle2" />
        </div>
        <div className="snapshot-text-wrapper3">
          <img alt="normal-eye" src={threeTomoea}></img>
          <span className="snapshot-text">Three Tomoe</span>
        </div>
      </div>
      <div id="animation-eyemod">
        <div className="modEyeImg-wrapper">
          <svg
            version="1.1"
            id="ModEye"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 1080"
            space="preserve"
          >
            <g id="left-eye-eyemod">
              <g id="Group-eyemod">
                <path
                  id="eyelid-eyemod"
                  d="M74.4,75.2c0,0,132.5,610.7,503.4,759.6
			c289.5,154.7,1029.7,84.4,1159.3,137.7h62.1l-28.1-73.3C1771.2,899.8,1484-3.3,74.4,75.2z"
                />
                <path
                  className="st0-eyemod"
                  d="M175.8,163.1c0,0,162.9,536.9,456,621.2C1008.7,942,1419.5,894,1616.4,896.9l101.4,22.9l-41.6-66.8
			C1676.2,852.9,1324,133.8,175.8,163.1z"
                />
                <g id="eyeball-saringan">
                  <path
                    className="st1-eyemod"
                    d="M914.9,198.3c100.8,27.5,321.8,70.9,321.8,256.1S1086,790.2,900.8,790.2S565,639.6,565,454.4
				S688.7,136.8,914.9,198.3z"
                  />
                  <ellipse cx="903.8" cy="448" rx="59.2" ry="59.2" />
                  {/* ************ */}
                  <g id="Spin-eyemod">
                    <ellipse
                      id="eye-ring-eyemod"
                      transform="matrix(0.7071 -0.7071 0.7071 0.7071 -51.5184 770.4687)"
                      className="st2-eyemod"
                      cx="904.3"
                      cy="447.4"
                      rx="207.5"
                      ry="207.5"
                    />
                    <g id="eye-curve1">
                      <ellipse
                        transform="matrix(0.8397 -0.5431 0.5431 0.8397 -214.2912 589.0655)"
                        cx="890.5"
                        cy="657.5"
                        rx="45.7"
                        ry="44.5"
                      />
                      <path
                        d="M775.8,682.7c-40.6-17.2,118.5,37.5,111.5-38.8c-2.1-22.5,64.2-9.9,40.3,37.6c-10.3,20.7-24.1,28.2-52.1,28.4
					C847.5,710.2,800.1,693,775.8,682.7z"
                      />
                    </g>
                    <g id="eye-curve2">
                      <ellipse
                        transform="matrix(0.9299 -0.3678 0.3678 0.9299 -75.6955 291.5976)"
                        cx="727.2"
                        cy="344.4"
                        rx="44.5"
                        ry="45.7"
                      />
                      <path
                        d="M724.9,227.1c24.8-36.4-60,108.8,16.2,117c22.4,2.3-2.8,65-44.8,32.1c-18.2-14.1-22.9-29.2-17.7-56.7
					C684,292,710.2,248.9,724.9,227.1z"
                      />
                    </g>
                    <g id="eye-curve3">
                      <ellipse
                        transform="matrix(0.6687 -0.7435 0.7435 0.6687 52.4791 968.7272)"
                        cx="1113.3"
                        cy="425.5"
                        rx="45.7"
                        ry="44.5"
                      />
                      <path
                        d="M1167.3,419.1c-4.6,27.6-14.3,40.2-36.3,47c-50.8,16.1-52.6-51.4-30.8-45.7c74.2,18.9,45.3-146.8,55.9-104
					C1162.4,341.9,1172,391.3,1167.3,419.1z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  d="M656.4,198.3c0,0,342.9-3.5,593.7,225.1c-13.5-100.2-26.4-125.4-26.4-125.4S1025,168.5,772.4,126.3
			C520.5,84.6,656.4,198.3,656.4,198.3z"
                />
              </g>
              <g className="st3-eyemod">
                <g>
                  <path
                    d="M409.7,607.4c0,0-109.6-184-76.2-342.3c0,0,830.5,15.2,1307,644.1l76.8,10.5c0,0-313-870.9-1548.4-767.2
				C169.4,152,306.5,555.2,409.7,607.4z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="modEyeText-wrapper">
          <h3 className="normal-eye">Normal Eye</h3>
          <h3 className="one-tomoea">One Tomoe</h3>
          <h3 className="two-tomoea">Two Tomoe</h3>
          <h3 className="three-tomoea">Three Tomoe</h3>
          <h3 className="mangekyo-sharingan">Mangekyo Sharingan</h3>
          <h3 className="eternal-mangekyo-sharingan">
            Eternal Mangekyo Sharingan
          </h3>
        </div>
      </div>
      <div className="eyeEvolution-cover">
        <div className="eyeEvolution-cover-textWrapper">
          <h2 className="eyeEvolution-cover-text">
            After Birth Uchihas have normal eyes like every other human
          </h2>
          <h2 className="eyeEvolution-cover-text">
            but when they experience psychological trauma
          </h2>
          <h2 className="eyeEvolution-cover-text">
            ( like someone close to them dying or extreme pressure like Life and
            Death Situation )
          </h2>
          <h2 className="eyeEvolution-cover-text">
            their eyes Start to Evolve.
          </h2>
          <h2 className="eyeEvolution-cover-text">
            We are gonna see this Evolution.
          </h2>
        </div>
      </div>
    </section>
  );
};
export default EyeEvolution;

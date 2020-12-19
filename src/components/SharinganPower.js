import React, { useEffect } from "react";
import "../Stylesheets/SharinganPower.css";
import hitachi from "../Media/SharinganPowers/hitachi.png";
import oneTomoea from "../Media/SharinganPowers/oneTomoea.png";
import twoTomoea from "../Media/SharinganPowers/twoTomoea.png";
import threeTomoea from "../Media/SharinganPowers/threeTomoea.png";
import gsap from "gsap";
const SharinganPower = () => {
    useEffect(()=> {
        let tl= gsap.timeline({
            // delay: 2,
        scrollTrigger:{
            trigger: ".sharingan-power-wrapper",
            start: "-=300 top",
            end: "bottom bottom",
        }
        })
        tl.fromTo(".hitachi-wrapper",{translateX: -500, autoAlpha: 0},{translateX: 0, autoAlpha: 1,ease: "slow(0.7, 0.7, false)"})
        tl.fromTo(".one-tomoea-image",{translateX: +500, autoAlpha: 0},{translateX: 0, autoAlpha: 1,ease: "slow(0.7, 0.7, false)"})
        tl.fromTo(".two-tomoea-image",{translateX: +500, autoAlpha: 0},{translateX: 0, autoAlpha: 1,ease: "slow(0.7, 0.7, false)"})
        tl.fromTo(".three-tomoea-image",{translateX: +500, autoAlpha: 0},{translateX: 0, autoAlpha: 1,ease: "slow(0.7, 0.7, false)"})
    },[])
  return (
    <section className="sharingan-power-wrapper">
      <div className="hitachi-wrapper">
        <img src={hitachi} alt="hitachi" className="hitachi-pointing"></img>
      </div>
      <div className="sharingan-evolove-images">
        <div className="one-tomoea-image">
          <img src={oneTomoea} alt="oneTomoea" className="tomoes"></img>
          <div className="tomoeas-headline-text-wrapper">
            <p className="tomoeas-headline"> ONE TOMOE</p>
            <p className="tomoeas-headline-text">This form of sharingan allows the user to percieve motions.</p>
          </div>
        </div>
        <div className="two-tomoea-image">
          <img src={twoTomoea} alt="twoTomoea" className="tomoes"></img>
          <div className="tomoeas-headline-text-wrapper">
            <p className="tomoeas-headline"> TWO TOMOE</p>
            <p className="tomoeas-headline-text">
              This form of sharingan allows the user to percieve motions as well
              as be able to copy the motions perceived.
            </p>
          </div>
        </div>
        <div className="three-tomoea-image">
          <img src={threeTomoea} alt="threeTomoea" className="tomoes"></img>
          <div className="tomoeas-headline-text-wrapper">
            <p className="tomoeas-headline"> THREE TOMOE</p>
            <p className="tomoeas-headline-text">
              This form of sharingan allows the user to perceive motions, copy
              the motions perceived and predict motions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SharinganPower;

import React, { useEffect } from "react";
import "../Stylesheets/Mangekyo.css";
import gsap from "gsap";
const Mangekyo = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".Mangekyo-Wrapper",
        start: "-=300 top",
        end: "bottom bottom",
      },
    });
    tl.fromTo("#spin",{autoAlpha:1, rotation:0},
    {autoAlpha: 0, duration: 1, rotation: 360, transformOrigin:"46% 40.1%"});
    tl.fromTo("#mangekyou-spin",{rotation: 0},
    {rotation:360, duration: 1, transformOrigin: "45% 50%"},"-=0.4")
    tl.fromTo("#mangekyou-spin",{autoAlpha:0},
    {autoAlpha:1, duration: 1},"-=1")
    tl.fromTo(
      ".Mangekyo-wrapper-right",
      { translateX: -684, zIndex: 1 },
      { translateX: 0, duration: 1, ease: "power1", delay: 1 }
    );
    tl.fromTo(
      ".eternal",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1, ease: "power1" }
    );
    tl.fromTo(
      ".rect",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1, ease: "power1" },
      "-=1"
    );
  }, []);
  return (
    <section className="Mangekyo-Wrapper">
      <div className="Mangekyo-wrapper-left">
        <h2 className="mangekyo-sharingan-headline">Mangekyou Sharingan</h2>
        <div className="madara-mangekyo">
          {/* ****************************SVG*********************************************** */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 1080"
            space="preserve"
            id="madara-mangekyo"
          >
            <g>
              <g>
                <g id="Layer_3">
                  <circle
                    id="_x3C_eyeBorder_x3E_"
                    className="st0-madaraMangekyou"
                    cx="942.9"
                    cy="536.6"
                    r="492.5"
                  />
                </g>
                <g id="Layer_4">
                  <circle
                    id="_x3C_RedColor_x3E_"
                    className="st1-madaraMangekyou"
                    cx="944.4"
                    cy="536.4"
                    r="492.5"
                  />
                </g>
              </g>
            </g>
            <g id="mangekyou-spin">
              <path
                d="M851.3,760.8c0,0-113.3,2.7-181.2-127.5c0,0-37.1-112.1-8.4-188.1l-53.2-35.8c-52.7,110-0.7,238.2-0.7,238.2
		C651.1,805.1,853,919,853,919C824.9,861.4,823.1,812.4,851.3,760.8z"
              />
              <path
                d="M794.6,317.4c0,0,53.7-92.7,200.3-84.9c0,0,115.4,25.1,166.1,88.6l58-27.6c-67.9-101.4-204.7-121.9-204.7-121.9
		c-157.2-43.2-364.7,73-360.1,72.2C663.6,241.9,777.6,264.5,794.6,317.4z"
              />
              <path
                d="M1201.8,503c0,0,43,90.5-35.5,216c0,0-76.8,91.6-151.9,112.2l-6.9,61.2c113.6-21.3,197.3-133.4,197.3-133.4
		c111.7-121.8,124.6-340.4,124.6-340.4C1301,466,1258.2,493.4,1201.8,503z"
              />
              <circle className="st2-madaraMangekyou" cx="918.1" cy="843.3" r="94.8" />

              <ellipse
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 77.0309 986.6382)"
                className="st2-madaraMangekyou"
                cx="1229.5"
                cy="400.3"
                rx="94.8"
                ry="94.8"
              />
              <circle className="st2-madaraMangekyou" cx="693.1" cy="344.4" r="94.8" />
            </g>
            <circle className="st3-madaraMangekyou" cx="936.2" cy="524.5" r="75" />
            <g>
              <g id="spin">
                <circle className="st4-madaraMangekyou" cx="945.2" cy="527.1" r="311.5" />
                <g id="_x3C_eyePointer3_x3E_">
                  <ellipse
                    transform="matrix(0.5277 -0.8494 0.8494 0.5277 -253.0011 1222.798)"
                    cx="973.1"
                    cy="838.9"
                    rx="68.9"
                    ry="66.6"
                  />
                  <path
                    d="M834.1,946.6c-66.3,2.7,185.1-24.9,126.9-124.1c-17.3-29.5,81.4-54.3,79,25.1c-1,34.8-14.5,54.1-52.3,72.2
				C949.9,938,874,945,834.1,946.6z"
                  />
                </g>
                <g id="_x3C_eyePointer2_x3E_">
                  <ellipse
                    transform="matrix(0.935 -0.3547 0.3547 0.935 -62.8899 458.4998)"
                    cx="1219.3"
                    cy="400.8"
                    rx="68.9"
                    ry="66.6"
                  />
                  <path
                    d="M1394.8,399.6c54.3,38.1-162.2-92.6-176.2,21.6c-4.1,34-97.7-6.3-47.5-67.9c22-27.1,44.3-34.3,85.4-25.7
				C1297.6,336.1,1362,376.6,1394.8,399.6z"
                  />
                </g>
                <g id="_x3C_eyePointer1_x3E_">
                  <ellipse
                    transform="matrix(0.5553 -0.8317 0.8317 0.5553 -88.5756 746.9155)"
                    cx="654.1"
                    cy="456.3"
                    rx="66.6"
                    ry="68.9"
                  />
                  <path
                    d="M551.1,314c-0.5-66.3,18.9,185.8,119.9,130.9c30-16.4,51.6,83.1-27.7,78.2c-34.7-2.1-53.6-16.2-70.5-54.6
				C555.9,430,551.3,354,551.1,314z"
                  />
                </g>
              </g>
            </g>
          </svg>

          {/* ****************************SVG ENDDDDDDDDDDDDDDD*********************************************** */}
          <p className="madara-mangekyo-text">
            After three tomoea the eyes evolve into Mangekyou Sharingan. It
            unlocks a new power in them.
          </p>
        </div>
      </div>

      <div className="Mangekyo-wrapper-right">
        <h2 className="mangekyo-sharingan-headline eternal">
          Eternal Mangekyou Shringan
        </h2>
        <div className="madara-mangekyo">
          {/* ****************************SVG*********************************************** */}
          <svg
            version="1.1"
            id="madara-eternal-mangekyo"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 1080"
            space="preserve"
          >
            <g>
              <g>
                <g id="Layer_3">
                  <circle
                    id="_x3C_eyeBorder_x3E_"
                    className="st0-madaraMangekyou"
                    cx="942.9"
                    cy="536.6"
                    r="492.5"
                  />
                </g>
                <g id="Layer_4">
                  <circle
                    id="_x3C_RedColor_x3E_"
                    className="st1-madaraMangekyou"
                    cx="944.4"
                    cy="536.4"
                    r="492.5"
                  />
                </g>
              </g>
            </g>
            <g>
              <path
                d="M778.5,730.2c0,0-108.6-32.4-133-177.2c0,0-0.7-118.1,50.1-181.5L656.1,321c-84.1,88.4-74.2,226.4-74.2,226.4
		c-7.5,163.1,149.4,333.8,149.4,333.8C722.4,817.7,735.8,770.6,778.5,730.2z"
              />
              <path
                d="M861.4,290.9c0,0,79.7-71.6,216.7-18.9c0,0,102,59.5,130.7,135.5l63.7-8.3c-33.3-117.4-157.1-179.1-157.1-179.1
		c-136.2-89.6-369.4-43.1-364.8-42.5C760.1,178.7,861.6,235.4,861.4,290.9z"
              />
              <path
                d="M1191.5,593.1c0,0,13,99.4-100.4,194.5c0,0-101.3,63.4-179.1,59.8l-25.5,56.1c114.6,14.8,228.8-66,228.8-66
		c143.8-81.4,223.6-285.3,223.6-285.3C1297.3,588.5,1248.1,601.4,1191.5,593.1z"
              />
              <circle
                className="st2-madaraMangekyou"
                cx="816.6"
                cy="829.2"
                r="94.8"
              />
              <circle
                className="st2-madaraMangekyou"
                cx="1249.5"
                cy="504"
                r="94.8"
              />
              <circle
                className="st2-madaraMangekyou"
                cx="756.5"
                cy="285.3"
                r="94.8"
              />
            </g>
            <circle
              className="st3-madaraMangekyou"
              cx="936.2"
              cy="524.5"
              r="75"
            />
            <g>
              <g>
                <path
                  d="M774.9,734.4c0,0-110.6-32.4-136.3-179.5c0,0-1.3-120.1,49.9-184.9l-40.5-51.3c-85,90.4-74.2,230.8-74.2,230.8
			c-6.7,166,153.9,338.8,153.9,338.8C718.3,823.7,731.6,775.7,774.9,734.4z"
                />
                <path
                  d="M856.7,286.9c0,0,80.7-73.3,220.4-20.5c0,0,104.1,60,133.8,137.1l64.8-8.8c-34.6-119.2-160.9-181.4-160.9-181.4
			c-139.1-90.4-376.1-41.7-371.4-41.2C753,173.3,856.7,230.4,856.7,286.9z"
                />
                <path
                  d="M1194.3,592.5c0,0,13.8,101-101.1,198.4c0,0-102.7,65.1-181.9,61.9L885.8,910c116.6,14.4,232.5-68.5,232.5-68.5
			c145.9-83.6,225.9-291.6,225.9-291.6C1301.9,587.2,1252,600.7,1194.3,592.5z"
                />
                <circle
                  className="st2-madaraMangekyou"
                  cx="814.2"
                  cy="834.9"
                  r="96.5"
                />
                <circle
                  className="st2-madaraMangekyou"
                  cx="1252.9"
                  cy="501.5"
                  r="96.5"
                />
                <circle
                  className="st2-madaraMangekyou"
                  cx="750"
                  cy="281.8"
                  r="96.5"
                />
              </g>
              <rect
                x="969.6"
                y="84"
                transform="matrix(0.9103 0.414 -0.414 0.9103 167.693 -440.9008)"
                width="262.8"
                height="164.9"
                className="rect"
              />
              <rect
                x="1056.2"
                y="765.7"
                transform="matrix(0.765 -0.644 0.644 0.765 -267.1256 964.1711)"
                width="262.8"
                height="164.9"
                className="rect"
              />
              <rect
                x="414.5"
                y="503.6"
                transform="matrix(-0.136 -0.9907 0.9907 -0.136 39.4283 1206.5564)"
                width="262.8"
                height="164.9"
                className="rect"
              />
            </g>
          </svg>

          {/* ****************************SVG ENDDDDDDDDDDDDDDD*********************************************** */}
          <p className="madara-mangekyo-text eternal">
            To further evolve the eyes one needs to take the eyes of their
            sbling.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Mangekyo;

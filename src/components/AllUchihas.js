import React, {useEffect} from "react";
import "../Stylesheets/AllUchihas.css";
import indra from "../Media/AllUchihas/indra-otsutsuki.png";
import indraEye from "../Media/AllUchihas/indra-eye.png";
import madara from "../Media/AllUchihas/madara.png";
import madaraEye from "../Media/AllUchihas/madra-eye.png";
import izuna from "../Media/AllUchihas/izuna.png";
import izunaEye from "../Media/AllUchihas/izuna-eye.png";
import obito from "../Media/AllUchihas/obito.png";
import obitoEye from "../Media/AllUchihas/obito-eye.png";
import shisui from "../Media/AllUchihas/shisui.png";
import shisuiEye from "../Media/AllUchihas/shisui-eye.png";
import itachi from "../Media/AllUchihas/itachi.png";
import itachiEye from "../Media/AllUchihas/itachi-eye.png";
import sasuke from "../Media/AllUchihas/sasuke.png";
import sasukeEye from "../Media/AllUchihas/sasuke-eye.png";
import shin from "../Media/AllUchihas/shin.png";
import shinEye from "../Media/AllUchihas/shin-eye.png";
import gsap from "gsap";
const AllUchihas = () => {
  useEffect(() => {
    const tl = gsap.timeline( {
      //delay: 2,
  scrollTrigger:{
      trigger: ".all-uchiha",
      start: "-=300 top",
      end: "bottom bottom",
  }
  })
    tl.fromTo(".alluchiha-text-animate",
    {translateX:1500},
    {translateX:0, stagger: 0.5, duration: 1});
    tl.fromTo(".alluchihas-intro",{autoAlpha:1},{autoAlpha:0, duration: 1})
  }, [])
  return (
    <section className="all-uchiha">
      <div className="alluchihas-intro">
        <div className="alluchihas-intro-text">
          <p className="alluchiha-text-animate">Mangekyou</p>
          <p className="alluchiha-text-animate"> Sharingan</p>
          <p className="alluchiha-text-animate"> Users</p>
          </div>
        </div>
      <div className="center-position">
        <div className="uchiha-mangekyo-divider">
          <div className={"uchiha-mangekyo-wrapper"}>
            <div className="uchiha-mangekyo">
              <p className="tagname">indra</p>
              <img
                src={indraEye}
                alt="indraEye"
                id="#mangekyo-image-small"
              ></img>
              <p className="tagname">otsutsuki</p>
            </div>
            <div className="uchihas">
              <img src={indra} alt="indra"></img>
            </div>
          </div>
          <div className={"uchiha-mangekyo-wrapper"}>
            <div className="uchiha-mangekyo">
              <p className="tagname">madara</p>
              <img
                src={madaraEye}
                alt="indraEye"
                id="#mangekyo-image-small"
              ></img>
              <p className="tagname">uchiha</p>
            </div>
            <div className="uchihas">
              <img src={madara} alt="indra"></img>
            </div>
          </div>
          <div className={"uchiha-mangekyo-wrapper"}>
            <div className="uchiha-mangekyo">
              <p className="tagname">izuna</p>
              <img
                src={izunaEye}
                alt="indraEye"
                id="#mangekyo-image-small"
              ></img>
              <p className="tagname">uchiha</p>
            </div>
            <div className="uchihas">
              <img src={izuna} alt="indra"></img>
            </div>
          </div>
          <div className={"uchiha-mangekyo-wrapper"}>
            <div className="uchiha-mangekyo">
              <p className="tagname">obito</p>
              <img
                src={obitoEye}
                alt="indraEye"
                id="#mangekyo-image-small"
              ></img>
              <p className="tagname">uchiha</p>
            </div>
            <div className="uchihas">
              <img src={obito} alt="indra"></img>
            </div>
          </div>
        </div>

        {/*************************Lower Half Part********************************* */}
        <div className="uchiha-mangekyo-divider">
          <div className={"uchiha-mangekyo-wrapper"}>
            <div className="uchiha-mangekyo">
              <p className="tagname">shisui</p>
              <img
                src={shisuiEye}
                alt="indraEye"
                id="#mangekyo-image-small"
              ></img>
              <p className="tagname">uchiha</p>
            </div>
            <div className="uchihas">
              <img src={shisui} alt="indra"></img>
            </div>
          </div>
          <div className={"uchiha-mangekyo-wrapper"}>
            <div className="uchiha-mangekyo">
              <p className="tagname">itachi</p>
              <img
                src={itachiEye}
                alt="indraEye"
                id="#mangekyo-image-small"
              ></img>
              <p className="tagname">uchiha</p>
            </div>
            <div className="uchihas">
              <img src={itachi} alt="indra"></img>
            </div>
          </div>
          <div className={"uchiha-mangekyo-wrapper"}>
            <div className="uchiha-mangekyo">
              <p className="tagname">sasuke</p>
              <img
                src={sasukeEye}
                alt="sasukeEye"
                id="#mangekyo-image-small"
              ></img>
              <p className="tagname">uchiha</p>
            </div>
            <div className="uchihas">
              <img src={sasuke} alt="sasuke"></img>
            </div>
          </div>
          <div className={"uchiha-mangekyo-wrapper"}>
            <div className="uchiha-mangekyo">
              <p className="tagname">shin</p>
              <img src={shinEye} alt="shinEye" id="#mangekyo-image-small"></img>
              <p className="tagname">uchiha</p>
            </div>
            <div className="uchihas">
              <img src={shin} alt="shin"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllUchihas;

import React from "react";
import "../Stylesheets/SharinganVideo.css";
import ReactPlayer from "react-player";
const SharinganVideo = () => {
  return (
    <section className="Sharingan-Video">
      <div id="video-player">
          <p style={{fontFamily: "sans-sarif cursive", fontSize: ".9em", color: "black"}}>Video Courtesy <span style={{color: "rgb(185, 13, 13)", fontSize: "1.5em", fontWeight: 800}}>Ninpo</span></p>
          
        <ReactPlayer
          url="https://youtu.be/TfNffBqLsuM"
          controls="true"
          width="800px"
          height="450px"
          volume=".1"
        />
      </div>
    </section>
  );
};
export default SharinganVideo;

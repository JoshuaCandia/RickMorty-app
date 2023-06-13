//import style
import style from "./Landing.module.css";

//Backgoround Video
import video from "../../../images/videos/video.mp4";
import audio from "../../../images/videos/audio2.mp3";

//Import Form
import Form from "../../Form/Form";

//Import hooks
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//Login variables
const email = "joshuacandia74@gmail.com";
const password = "turroMantico123";

//Landing view component
const Landing = ({ login }) => {
  //Hooks
  const navigate = useNavigate();

  //State login
  const [access, setAccess] = useState(false);

  //Use effect navigate
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <>
      <div className={style.divLanding}>
        <div className={style.videoAndAudio}></div>
        <video src={video} autoPlay muted loop></video>
        <audio autoPlay loop>
          <source src={audio} type="audio/mpeg" />
        </audio>

        <Form login={login} />
      </div>
    </>
  );
};

export default Landing;

//Copia de seguridad

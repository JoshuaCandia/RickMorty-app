//Import styles
import style from "./Detail.module.css";
//Import PNG
import png from '../../../images/Rick-And-Morty-PNG-Transparent-Image.png'

//Import Axios
import axios from "axios";

//Import hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  //Declaro mi State
  const [character, setCharacter] = useState({});

  //Use Params
  const { id } = useParams();

  //Use Effect 
useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character.name ? (

        <div className={style.detailDivContainer}>

          <div className={style.infoDetailContainer}>
            <div className={style.nameDetailChar}>
            <li className={style.liNameChar}>{character && character.name}</li>
            </div>
           
            <ul className={style.ulInfo}>
              <li className={style.liInfo}>{character && character.status}</li>
              <li className={style.liInfo}>{character && character.species}</li>
              <li className={style.liInfo}>{character && character.gender}</li>
              <li className={style.liInfo}>{character && character.origin.name}</li>
            </ul>
          </div>

          <div className={style.ImgDetailContainer}>
            <img className={style.imgDetail} src={character && character.image} alt="" />
          </div>
        </div>
      ) : (
        <h3>Loading......</h3>
      )}
      
    </div>
  );
};

export default Detail;

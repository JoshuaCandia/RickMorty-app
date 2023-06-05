//Import Styles
import style from "./Card.module.css";

//Import hooks
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={style.containerCard}>
      {/*Close Button*/}
      <button className={style.buttonCard} onClick={() => onClose(id)}>
        X
      </button>
      {/*Card Container*/}
      <Link className={style.linkDetails} to={`/detail/${id}`}>
        <div className={style.card}>
          {/*Character image and background*/}

          <div className={style.backroundImage}>
            {/*SweetAlert image*/}

            <img src={image} alt="" className={style.characterImage} />
            {/*Background portal*/}

            <div className={style.portalBackground}></div>
          </div>

          <div className={style.backOfBack}>
            {/*Nombre de Personaje*/}

            <h2 className={style.nameCard}>{name}</h2>

            {/*Info de personajes*/}
          </div>
        </div>
      </Link>
    </div>
  );
}

/*
         <div className={style.infoCard}>
            <h2 className={style.h2}>
              <div className={style.divH2Colored}>status</div>
              <div className={style.divH2NotColored}>{status}</div>
            </h2>

            <h2 className={style.h2}>
              <div className={style.divH2Colored}>Species</div>
              <div className={style.divH2NotColored}>{species}</div>
            </h2>

            <h2 className={style.h2}>
              <div className={style.divH2Colored}>Gender</div>
              <div className={style.divH2NotColored}>{gender}</div>
            </h2>
          </div>
*/

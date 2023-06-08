//Import Styles
import style from "./Card.module.css";

//Import hooks
import { Link, useLocation } from "react-router-dom";

import { addFav, removeFav } from "../../redux/actions";

import { connect } from "react-redux";

import { useState, useEffect } from "react";

function Card({ id, name,status,species,gender,origin, image, onClose, addFav, removeFav, myFavorites }) {
  const location = useLocation();
  /* Estado Local fav*/
  const [isFav, setIsFav] = useState(false);

  /* Use Effect */
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  /* Function button Fav*/
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    }
    if (!isFav) {
      setIsFav(true);
      addFav({ id, name,status,species,gender,origin, image, onClose });
    }
  };

  return (
    <div className={style.containerCard}>
      <div className={style.divButtons}>

        {/*Close Button*/}
        {location.pathname !== "/favorites" && (
          <button className={style.buttonCard} onClick={() => onClose(id)}>
            X
          </button>
        )}

        {/* Button Fav */}

        <button className={style.buttonFav} onClick={handleFavorite}>
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>

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

{/* Function Global State */}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

{/* Function Dispatch props */}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

import style from "./Favorites.module.css";

// Import child components
import Card from "../../Individual_card/Card";

// Import hooks
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

// Import Actions
import { filterCards, orderCards } from "../../../redux/actions";

const Favorites = ({ myFavorites }) => {
  // Hooks
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  useEffect(() => {
    dispatch(filterCards(""));
  }, []);

  // Functions handleChange
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.generalContainer}>
      <>
        <div className={style.divSelector}>
          <select className={style.customSelect} onChange={handleOrder}>
            <option value="A" defaultValue>
              Ascendent
            </option>
            <option value="D">Descendent</option>
          </select>

          <select className={style.customSelect} onChange={handleFilter}>
            <option disabled defaultValue="">
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
            <option value="">All</option>
          </select>
        </div>
      </>

      <div className={style.favoritesContainer}>
        {myFavorites.map(({ id, name, image }) => {
          return <Card key={id} id={id} name={name} image={image} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);

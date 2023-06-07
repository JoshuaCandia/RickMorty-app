import style from "./Favorites.module.css";

//Import child components
import Card from "../../Individual_card/Card";

//Import hooks
import { connect } from "react-redux";

const Favorites = ({ myFavorites }) => {
  console.log(myFavorites)
  return (
    <div className={style.favoritesContainer}>
      {
        myFavorites.map(fav => {
            return (
            <Card key={fav.id} id={fav.id} name={fav.name} image={fav.image} />
            );
        })
      }
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);

import Card from "../Individual_card/Card";
import style from "./Cards.module.css";
export default function Cards({ characters, onClose,onCloseAllCards }) {
  return (
    <div className={style.cards}>
      
      {characters.map(
        ({ id, name, status, species, gender, origin, image,  }) => {
          return (
    
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              origin={origin.name}
              gender={gender}
              image={image}
              onClose={onClose}
            ></Card>
          );
        }
      )}
    </div>
  );
}


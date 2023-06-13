//Import Style of APp
import "./App.css";

//Import Components
import Cards from "./components/container_cards/Cards.jsx";
import Nav from "./components/navBar/Nav";
import SearchBar from "./components/search_bar/SearchBar";
import Error404 from "./components/Error404/Error404";

//Imports Views
import Landing from "./components/Views/Landing/Landing";
import About from "./components/Views/About/About";
import Detail from "./components/Views/Detail/Detail";
import Favorites from "./components/Views/Favorites/Favorites";

//Import Hooks
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

//Import Axios
import axios from "axios";

//Login variables
const email = "ciudadanoPromedio@gmail.com";
const password = "turroMantico123";

function App() {
  //React hooks
  const location = useLocation();
  const navigate = useNavigate();

  //State characters
  const [characters, setCharacters] = useState([]);

  //State login
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (
      userData.password === password &&
      userData.email.toLowerCase() === email.toLowerCase()
    ) {
      setAccess(true);
      navigate("/home");
    }
  };

  //Use effect navigate
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //LogOut function
  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  //Card search Function
  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        console.log(data);
        if (
          data.name &&
          characters.find((char) => char.id === data.id) === undefined
        ) {
          setCharacters([...characters, data]);
        } else if (
          data.name &&
          characters.find((char) => char.id === data.id) !== undefined
        ) {
          window.alert("Ya se encuentra en pantalla la card!");
        }
      }
    );
  };

  //Close Cards Function
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  //Close all Cards

  const onCloseAllCards = () => {
    setCharacters([]);
  };

  //Random Character Function
  const randomChar = () => {
    const randomNumber = Math.floor(Math.random() * 826 + 1);
    const url = `https://rickandmortyapi.com/api/character/${randomNumber}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          if (characters.length < 20) {
            setCharacters((prevCharacters) => [...prevCharacters, data]);
          } else {
            window.alert("Solo números hasta el 826 y solo 20 personajes");
          }
        }
      })
      .catch((error) => {
        console.error("Error al obtener el personaje:", error);
      });
  };

  //App render
  return (
    <div className="App">
      {/*Nav nav and Title*/}
      {location.pathname !== "/" ? (
        <Nav logOut={logOut} randomChar={randomChar} onSearch={onSearch}></Nav>
      ) : null}

      {/*Search bar*/}
      {location.pathname === "/home" ? (
        <SearchBar
          id={characters.id}
          onSearch={onSearch}
          onCloseAllCards={onCloseAllCards}
        ></SearchBar>
      ) : null}

      {/*Views routes*/}
      <Routes>
        <Route path="/" element={<Landing login={login} />} />
        <Route
          path="/home"
          element={
            <Cards
              onCloseAllCards={onCloseAllCards}
              onClose={onClose}
              characters={characters}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

//Copia de seguridad

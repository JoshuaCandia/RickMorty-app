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

function App() {
  //React hooks
  const location = useLocation();
  const navigate = useNavigate();

  //State characters
  const [characters, setCharacters] = useState([]);

  //State login
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";

      const { data } = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;

      if (!access) throw new Error("Incorrect email or password");
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      alert(error.message);
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
  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      ); //destructuring de response

      if (data.name && !characters.find((char) => char.id === data.id)) {
        setCharacters([...characters, data]);
      } else if (data.name && characters.find((char) => char.id === data.id)) {
        window.alert("The card is already on screen!");
      }
    } catch (error) {
      alert("The character with that ID was not found.");
    }
  };

  //Close Cards Function
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
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
    const url = `http://localhost:3001/rickandmorty/character/${randomNumber}`;

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

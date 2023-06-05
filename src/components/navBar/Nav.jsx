//Import styles
import style from "./Nav.module.css";

//Import child component
import TitlePage from "../titlePage/TitlePage";
//Import hooks

import { Link } from "react-router-dom";

//Nav component
export default function Nav({  randomChar,logOut }) {

  return (
    <>
      {/*Nav Container¨*/}
      <div className={style.navBar}>
        <nav className={style.nav}>
          <ul className={style.ulNav}>
            <li className={style.liHome}>
              <Link className={style.aHome} to="/home">
                Home
              </Link>
            </li>
            <li className={style.liAbout}>
              <Link className={style.aAbout} to="/about">
                About
              </Link>
            </li>
            
          </ul>
          <div className={style.randomAndLogOut}>
              <li onClick={randomChar} className={style.liRandomChar}>
                Random 
              </li>
              <li onClick={()=> logOut()}  className={style.liLogOut}>Log Out</li>
              </div>
          {/*Rick and Morty Title*/}
          <div className={style.titlePageDiv}>
            <TitlePage></TitlePage>
          </div>
        </nav>
      </div>
    </>
  );
}

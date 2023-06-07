//Import styles
import style from "./Nav.module.css";

//Import child component
import TitlePage from "../titlePage/TitlePage";

//Import hooks
import { Link, useLocation } from "react-router-dom";

//Nav component
export default function Nav({ randomChar, logOut }) {
  const location = useLocation();

  return (
    <>
      {/*Nav Container¨*/}
      <div className={style.navBar}>
        {/* Nav Container */}
        <nav className={style.nav}>
          <ul className={style.ulNav}>
            <Link className={style.aHome} to="/home">
              <li className={style.liHome}>Home</li>
            </Link>

            <Link className={style.aAbout} to="/about">
              <li className={style.liAbout}>About</li>
            </Link>

            <li onClick={() => logOut()} className={style.liLogOut}>
              Log Out
            </li>
          </ul>

          <ul className={style.randomAndLogOut}>
            {location.pathname === "/home" && (
              <li onClick={randomChar} className={style.liRandomChar}>
                Random Character
              </li>
            )}
             {location.pathname !== "/favorites" && (
              <Link className={style.aFavorites} to="/favorites">
                <li className={style.liFavorites}>Favorites</li>
              </Link>
            )}
            
          </ul>
          {/*Rick and Morty Title*/}
          <div className={style.titlePageDiv}>
            <TitlePage></TitlePage>
          </div>
        </nav>
      </div>
    </>
  );
}

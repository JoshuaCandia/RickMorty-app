import style from "./Title.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TitlePage() {
  const location = useLocation();
  return (
    <div className={style.divContainerTitle}>
      <div className={style.titlePage}>
        <Link className={style.linkLogo} to={'/home'}>
        <p className={style.rick}>Rick</p>
        <p className={style.morty}>Morty</p>
        </Link>
      </div>
    </div>
  );
}

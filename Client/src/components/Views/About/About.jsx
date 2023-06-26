import style from "./About.module.css";
import aboutImg from "../../../images/about.jpg";

const About = () => {
  return (
    <>
      <div className={style.aboutDiv}>
        <div className={style.titleAbout}>
          <h1 className={style.h1About}>
            Proyecto Integrador de Joshua Candia
          </h1>
        </div>

        <main className={style.mainAbout}>
          <div className={style.textAbout}>
            <div className={style.h3About}>
              <h3>
                ¡Bienvenidos al proyecto integrador de React "La Locura de Rick
                and Morty de Joshua Candia"! Explora una aplicación web creada
                con React que te permite conocer y obtener información detallada
                sobre los personajes icónicos de la serie animada "Rick and
                Morty". A través de componentes funcionales, hooks y el
                enrutamiento con React Router, podrás sumergirte en el
                fascinante universo de humor absurdo y aventuras
                intergalácticas. ¡Disfruta de esta experiencia y no olvides
                dejar tus comentarios y sugerencias para mejorar el proyecto!
              </h3>
            </div>
          </div>

          <aside className={style.asideAbout}>
            <h2>Tecnologías utilizadas:</h2>

            <div className={style.asideTech}>
              <ul>
                <h3>Frontend</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>

              <ul>
                <h3>Backend</h3>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Jest</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
};

export default About;

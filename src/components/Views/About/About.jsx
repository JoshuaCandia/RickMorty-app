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
            <h3>
              Soy un estudiante de Henry, y en este desafío estuve desarrollando
              una página funcional con las tecnologías que pude aprender en el
              bootcamp.
            </h3>

            <h3>
              ¡Bienvenidos al proyecto integrador de React :" La Locura de Rick
              and Morty de: Joshua Candia"! Prepárense para sumergirse en el
              fascinante universo de esta serie animada repleta de humor absurdo
              y aventuras intergalácticas.
            </h3>

            <h3>
              ¿Qué onda con este proyecto? ¡Te cuento! Armé una aplicación web
              con React, donde vas a poder explorar y descubrir todo sobre tus
              personajes favoritos de "Rick and Morty". Desde Rick Sánchez, el
              científico alcohólico y re loco, hasta Morty Smith, su nieto que
              se mete en quilombos pero tiene buen corazón. Vas a poder conocer
              a todos los personajes icónicos de la serie y conseguir
              información detallada sobre ellos, como su especie, género, origen
              y en qué episodios aparecen.
            </h3>

            <h3>
              Este proyecto fue una aventura de programación re emocionante,
              donde apliqué los conceptos y técnicas que aprendí en React. Usé
              componentes funcionales, hooks, el enrutamiento con React Router y
              me integré con una API para conseguir los datos de "Rick and
              Morty".
            </h3>

            <h3>
              Espero que te diviertas navegando en este proyecto y la pases
              bomba tanto como yo cuando lo armé. ¡No dudes en dejar tus
              comentarios y sugerencias! ¡Que la locura de "Rick and Morty" te
              acompañe en esta experiencia, pibe!
            </h3>

            <div className={style.donateDiv}>
              <h5>
                PD: Si sos un rarito de internet fan de Rick y Morty te adjunto
                mi CVU para que me dones:
              </h5>

              <div className={style.cvuDiv}>
                <h6>0000003100033555027822</h6>
                <h6>Gracias :D</h6>
              </div>
            </div>
          </div>

          <aside className={style.asideAbout}>
            <h2>Tecnologías utilizadas:</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </aside>
        </main>
       
      </div>
    </>
  );
};

export default About;

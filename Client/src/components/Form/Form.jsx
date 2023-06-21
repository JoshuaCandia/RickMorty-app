// Importar estilos
import style from "./Form.module.css";

// Importar función de validación
import validation from "./modules/validation";

// Importar Hooks
import { useState } from "react";

// Componente Form
const Form = ({ login }) => {
  // Estados
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Manejar cambio de estado
  const handleUserData = (event) => {
    const { name, value } = event.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validation({ ...userData, [name]: value })[name],
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.formContainer}>
      <div className={style.titleLogin}>
        <h2 className={style.rick}>Rick</h2>
        <h2 className={style.morty}>Morty</h2>
      </div>

      <form name="form" onSubmit={handleSubmit}>
        <div className={style.loginContainer}>
          <h2 className={style.login}>Login</h2>

          <div className={style.emailForm}>
            <label htmlFor="email">Email</label>

            <input
              autoComplete="on"
              className={style.inputEmail}
              name="email"
              onChange={handleUserData}
              value={userData.email}
              type="email"
              placeholder="Insert email"
              id="email"
            />
            {errors.email && (
              <p className={style.errorEmailP}>{errors.email}</p>
            )}
          </div>

          <div className={style.passwordForm}>
            <label htmlFor="password">Password</label>

            <input
              autoComplete="on"
              className={style.inputPassword}
              name="password"
              onChange={handleUserData}
              value={userData.password}
              type="password"
              placeholder="Insert password"
              id="password"
            />
            {errors.password && (
              <p className={style.errorPasswordP}>{errors.password}</p>
            )}
          </div>

          <button className={style.btnLogin}>Ingresar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
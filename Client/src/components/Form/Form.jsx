//Import style
import style from "./Form.module.css";

//Import validation function
import validation from "./modules/validation";

//Import Hooks
import { useState } from "react";

//Form component
const Form = ({ login }) => {
  {
    /*States*/
  }

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  //Handle Change State
  const handleUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  //Handle Submit

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
              className={style.inputEmail}
              name="email"
              onChange={handleUserData}
              value={userData.email}
              type="email"
              placeholder="Insert email"
              id=""
            />
            {errors.email && (
              <p className={style.errorEmailP}>{errors.email}</p>
            )}
          </div>

          <div className={style.passwordForm}>
            <label htmlFor="text">Password</label>

            <input
              className={style.inputPassword}
              name="password"
              onChange={handleUserData}
              value={userData.password}
              type="text"
              placeholder="Insert password"
              id=""
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

//Aca no esta roto y funciona bien con modules

import style from './Error404.module.css'

const Error404 = () => {
  return (
    <div className={style.divError404}>
      <h1 className={style.h1Error404}>Error 404 - Página no encontrada</h1>
      <p className={style.pError404}>La página que estás buscando no existe.</p>
    </div>
  );
};

export default Error404;

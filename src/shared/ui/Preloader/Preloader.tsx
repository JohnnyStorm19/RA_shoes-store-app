import style from "./Preloader.module.scss";

export const Preloader = () => {
  return (
    <div className={style.preloader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

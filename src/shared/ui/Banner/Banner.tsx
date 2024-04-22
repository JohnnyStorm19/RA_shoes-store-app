import style from "./Banner.module.scss";

export const Banner = () => {
  return (
    <div className={style.banner}>
      <img src="/src/shared/assets/banner.jpg" alt="" />
      <h2 className={style.banner_title}>К весне готовы!</h2>
    </div>
  );
};

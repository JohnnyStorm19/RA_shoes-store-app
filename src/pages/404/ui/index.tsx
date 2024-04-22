import { Link } from "react-router-dom";
import style from "./404.module.scss";

export const Page404 = () => {
  return (
    <div>
      <h2 className={style.page_title}>Страница не найдена</h2>
      <p>Извините, такая страница не найдена!</p>
      <div className={style.link_wrapper}>
        <Link to="/" className={style.link}>
          На главную страницу
        </Link>
      </div>
    </div>
  );
};

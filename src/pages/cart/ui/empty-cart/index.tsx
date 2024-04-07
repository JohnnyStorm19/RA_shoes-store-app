import style from './emptyCart.module.scss';

import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div>
      Ваша корзина пуста, <br /> чтобы добавить товары, перейдите в{" "}
      <Link to="/catalogue" className={style.link}>
        каталог
      </Link>
    </div>
  );
};

import { Link } from "react-router-dom";
import { useContext } from "react";

import style from "./OpenCart.module.scss";

import { IContext } from "../../../shared/types";
import { AppContext } from "../../../app/providers";

export const OpenCart = () => {
  const { cartProducts } = useContext(AppContext) as IContext;
  const counter = cartProducts.length;

  return (
    <Link to={"/cart"}>
      <div className={style.open_cart}>
        {counter > 0 && <span className={style.cart_counter}>{counter}</span>}
      </div>
    </Link>
  );
};

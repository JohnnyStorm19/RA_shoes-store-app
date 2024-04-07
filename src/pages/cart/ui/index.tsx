import style from "./CartPage.module.scss";

import { useContext } from "react";

import { CartTable } from "./table";
import { EmptyCart } from "./empty-cart";

import { AppContext } from "../../../app/providers";
import { CheckoutForm } from "../../../features";
import { IContext } from "../../../shared/types";


export const CartPage = () => {
  const { cartProducts } = useContext(AppContext) as IContext;

  return (
    <div className={style.page_container}>
      <h2 className={style.page_title}>Корзина</h2>
      {cartProducts.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartTable />
          <CheckoutForm />
        </>
      )}
    </div>
  );
};

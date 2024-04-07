import style from "./AddToCard.module.scss";

import { useContext } from "react";
import toast from "react-hot-toast";

import { updateQuantity } from "../lib/updateQuantity";

import { Button } from "../../../shared/ui";
import { IContext, IProductFull } from "../../../shared/types";
import { AppContext } from "../../../app/providers/AppContextProvider";

interface IAddToCard {
  data: IProductFull;
  count: number;
  isSuccess: boolean;
}

export const AddToCart = ({ data, count, isSuccess }: IAddToCard) => {
  const { cartProducts, setCartProducts } = useContext(AppContext) as IContext;

  const handleAddToCart = () => {
    if (!isSuccess) return;
    const isAlreadyAdded = cartProducts.find(
      (product) => product.id === data.id
    );

    if (isAlreadyAdded) {
      updateQuantity({ setCartProducts, count, id: data.id });
      toast.success(`Товар уже в корзине. Добавлено ${count} единиц(ы) товара`);
      return;
    }

    const newProduct = {
      id: data.id,
      title: data.title,
      size: data.sizes.find((size) => size.available)?.size || "",
      quantity: count,
      price: data.price,
      overallPrice: data.price * count,
    };
    setCartProducts((state) => [...state, newProduct]);

    toast.success(`Товар добавлен в корзину`);
  };
  return (
    <Button
      type="button"
      className={style.addToCard_btn}
      onClickHandler={handleAddToCart}
    >
      В корзину
    </Button>
  );
};

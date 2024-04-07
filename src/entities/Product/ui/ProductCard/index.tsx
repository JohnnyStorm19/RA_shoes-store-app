import style from "./ProductCard.module.scss";

import { Link } from "react-router-dom";

import { Button } from "../../../../shared/ui";
import { IProductCard } from "../../../../shared/types";
import { formatPrice } from "../../../../shared/lib";

interface IProductCardProps {
  card: IProductCard;
}
const currency = import.meta.env.VITE_CURRENCY;

export const ProductCard = ({ card }: IProductCardProps) => {
  return (
    <div className={style.productCard}>
        <img
          src={card.images[0]}
          className={style.productCard_image}
          alt={card.title}
        />
      <div className={style.productCard_body}>
        <p className={style.productCard_title}>{card.title}</p>
        <p className={style.productCard_price}>
          {formatPrice(card.price)} {currency}
        </p>
        <Link to={`/catalogue/${card.id}`}>
          <Button
            type="button"
            className={style.productCard_btn}
            onClickHandler={() => true}
          >
            Заказать
          </Button>
        </Link>
      </div>
    </div>
  );
};

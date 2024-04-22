import { ICartProduct } from "../../../shared/types";

type GetFullPriceProps = {
  cartProducts: ICartProduct[];
};

export const getFullPrice = ({ cartProducts }: GetFullPriceProps) => {
  return cartProducts
    .map((product) => product.overallPrice)
    .reduce((acc, product) => (acc += product), 0);
};

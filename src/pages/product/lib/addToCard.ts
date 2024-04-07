import { ICartProduct } from "../../../shared/types";

interface IUpdateQuantityProps {
    setCartProducts:React.Dispatch<React.SetStateAction<ICartProduct[]>>;
    id: number;
    count: number;
}

export const updateQuantity = ({setCartProducts, id, count}: IUpdateQuantityProps) => {
    setCartProducts(prevCartProducts => {
        return prevCartProducts.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + count,
              overallPrice: (item.quantity + count) * item.price 
            };
          }
          return item;
        });
      });
}
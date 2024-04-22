import { ICartProduct } from "../../../shared/types";

interface IUpdateQuantity {
    setCartProducts:React.Dispatch<React.SetStateAction<ICartProduct[]>>;
    id: number;
    count: number;
}

export const updateQuantity = ({setCartProducts, id, count}: IUpdateQuantity) => {
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
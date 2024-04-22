import style from "./TableRows.module.scss";

import toast from "react-hot-toast";

import { getFullPrice } from "../../../lib/getFullPrice";
import { ICartProduct } from "../../../../../shared/types";
import { formatPrice } from "../../../../../shared/lib";
import { Button } from "../../../../../shared/ui";

interface ITableRowsProps {
  cartProducts: ICartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
}
const currency = import.meta.env.VITE_CURRENCY;

export const TableRows = ({ cartProducts, setCartProducts }: ITableRowsProps) => {
  const fullPrice = getFullPrice({ cartProducts });
  
  const handleDeleteBtn = (id: number) => {
    const deletedProduct = cartProducts.find(product => product.id === id);
    if (deletedProduct) {
      toast.error(`Удалено: ${deletedProduct.title}, пар: ${deletedProduct.quantity}`)
    }

    setCartProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id != id);
    });
  };

  return (
    <>
      {cartProducts.map((product, index) => {
        return (
          <tr key={product.id}>
            <td className={style.td_index}>{index + 1}</td>
            <td>{product.title}</td>
            <td>{product.size}</td>
            <td>{product.quantity}</td>
            <td>{formatPrice(product.price)} {currency}</td>
            <td>{formatPrice(product.overallPrice)} {currency}</td>
            <td>
              <Button
                type="button"
                className={style.delete_btn}
                onClick={() => handleDeleteBtn(product.id)}
              >
                Удалить
              </Button>
            </td>
          </tr>
        );
      })}
      <tr className={style.last_row}>
        <td colSpan={5} className={style.fullPrice_title}>
          Общая стоимость
        </td>
        <td>{formatPrice(fullPrice)} {currency}</td>
      </tr>
    </>
  );
};

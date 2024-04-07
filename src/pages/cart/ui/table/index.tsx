import { useContext } from "react";

import style from "./table.module.scss";

import { TableRows } from "./rows";
import { AppContext } from "../../../../app/providers";
import { IContext } from "../../../../shared/types";

const thead = [
  { id: 1, title: "#" },
  { id: 2, title: "Название" },
  { id: 3, title: "Размер" },
  { id: 4, title: "Количество" },
  { id: 5, title: "Стоимость" },
  { id: 6, title: "Итого" },
  { id: 7, title: "Действия" },
];

export const CartTable = () => {
  const { cartProducts, setCartProducts } = useContext(AppContext) as IContext;

  return (
    <table className={style.table}>
      <thead>
        <tr>
          {thead.map((item) => (
            <th key={item.id}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TableRows cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </tbody>
    </table>
  );
};

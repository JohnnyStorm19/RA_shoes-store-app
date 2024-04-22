import style from "./Sizes.module.scss";

import { IProductFull } from "../../../../shared/types";

interface SizesProps {
  data: IProductFull;
  count: number;
  handleBtnClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Sizes = ({ data, count, handleBtnClick }: SizesProps) => {
  return (
    <div className={style.sizes_container}>
      <p>
        Размеры в наличии:{" "}
        {data?.sizes.map((size) => {
          return (
            <span
              key={size.size}
              className={`${style.size} ${
                size.available ? style.available : ""
              }`}
            >
              {size.size}
            </span>
          );
        })}
      </p>
      <p>
        Количество:{" "}
        <span className={style.quantity}>
          <button data-type="decrement" onClick={handleBtnClick}>
            -
          </button>
          <span>{count}</span>
          <button data-type="increment" onClick={handleBtnClick}>
            +
          </button>
        </span>
      </p>
    </div>
  );
};

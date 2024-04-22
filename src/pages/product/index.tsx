import { useParams } from "react-router-dom";
import { useState } from "react";

import style from "./ProductsPage.module.scss";

import { ProductTable, Sizes } from "./info";
import { useGetSingleItem } from "./hooks";

import { AddToCart } from "../../features";
import { Preloader } from "../../shared/ui";
import { useRefreshStorage } from "../../shared/hooks";

export const ProductPage = () => {
  useRefreshStorage();
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const { data, isLoading, isSuccess } = useGetSingleItem(id as string);

  const handleCountClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const btnType = e.currentTarget.dataset.type;
    if (btnType === "increment") {
      setCount(count + 1);
    }
    if (btnType === "decrement" && count >= 2) {
      setCount(count - 1);
    }
  };

  return (
    <div className={style.page_container}>
      {isLoading && <Preloader />}

      <h2 className={style.title}>{data?.title}</h2>
      <div className={style.page_body}>
        <div className={style.page_body_img_col}>
          <img src={data?.images[0]} alt={data?.title} />
        </div>

        {isSuccess && (
          <div className={style.page_body_info_col}>
            <ProductTable data={data} />

            <Sizes
              data={data}
              count={count}
              handleBtnClick={handleCountClick}
            />

            <AddToCart count={count} data={data} isSuccess={isSuccess} />
          </div>
        )}
      </div>
    </div>
  );
};

import { useQuery } from "@tanstack/react-query";
import style from './bestsellers.module.scss';

import { ProductsList } from "../../../entities";
import { getTopSales } from "../../../shared/api";
import { Preloader } from "../../../shared/ui";

export const Bestsellers = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: getTopSales,
    queryKey: ["bestsellers"],
  });

  return (
    <section className={style.widget_container}>
      <h2 className={style.widget_title}>Хиты продаж!</h2>

      {isLoading && <Preloader />}

      {isSuccess && <ProductsList products={products} />}
    </section>
  );
};

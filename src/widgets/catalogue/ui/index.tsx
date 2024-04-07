import style from "./catalogue.module.scss";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getSearchingStatus } from "../lib";
import { CatalogueFilter, LoadMore } from "../../../features";
import { ProductsList } from "../../../entities";
import { GlobalError, Preloader } from "../../../shared/ui";
import { getAllItems } from "../../../shared/api";


export const Catalogue = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryFn: getAllItems,
    queryKey: ["products", "catalogue"],
    staleTime: 1000 * 60
  });
  const [searchParams] = useSearchParams();

  const isSearching = getSearchingStatus(searchParams);

  return (
    <section className={style.widget_container}>
      <h2 className={style.widget_title}>Каталог</h2>

      <CatalogueFilter />

      {isLoading && <Preloader />}

      {isSuccess && <ProductsList products={data} />}

      {!isSearching && <LoadMore />}

      {isError && <GlobalError message="Error fetching catalogue items!" />}

    </section>
  );
};

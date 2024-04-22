import style from "./filter.module.scss";

import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { AppContext } from "../../app/providers/AppContextProvider";
import { useGetAllItems, useGetCategories, useMutateByCategory } from "./hooks";
import { GlobalError } from "../../shared/ui";
import { IContext } from "../../shared/types";

export const CatalogueFilter = () => {
  const { setOffset, offsetStep } = useContext(AppContext) as IContext;
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(
    Number(searchParams.get("category")) || 1
  );

  const { data, isSuccess, isError } = useGetCategories();
  const { mutate: getByCategory, isError: itemsByCategoryError } =
    useMutateByCategory();
  const { mutate: getByAll, isError: allItemsError } = useGetAllItems();

  const linkStyle = (id: number) => {
    const activeStyle = isActive === id ? " " + style.active : "";
    return `${style.link}${activeStyle}`;
  };

  const handleClick = (id: number) => {
    if (id === isActive) return;

    setOffset(offsetStep);
    setIsActive(id);
    setSearchParams(`?category=${id}`);

    id === 1 ? getByAll() : getByCategory(id);
  };

  return (
    <>
      {isSuccess && (
        <div className={style.filter}>
          <ul className={style.filter_list}>
            <li onClick={() => handleClick(1)} className={linkStyle(1)}>
              Все
            </li>
            {data.map((category) => {
              return (
                <li
                  key={category.id}
                  className={linkStyle(category.id)}
                  onClick={() => handleClick(category.id)}
                >
                  {category.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {allItemsError ||
        (itemsByCategoryError && (
          <GlobalError message="Error fetching catalogue items" />
        ))}
      {isError && <GlobalError message="Error fetching categories" />}
    </>
  );
};

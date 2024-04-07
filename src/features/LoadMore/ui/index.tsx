import style from "./LoadMore.module.scss";

import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import {
  AppContext,
  IContext,
} from "../../../app/providers/AppContextProvider";
import { Button, Preloader } from "../../../shared/ui";
import { useLoadMore, useLoadMoreBy } from "../hooks";

export const LoadMore = () => {
  const { offset } = useContext(AppContext) as IContext;

  const [searchParams] = useSearchParams();
  const currentParam = Number(searchParams.get("category"));

  const { mutate: loadMoreMutate, isPending } = useLoadMore();
  const { mutate: loadMoreBy, isPending: isPendingLoadBy } = useLoadMoreBy();

  if (isPending || isPendingLoadBy) {
    return <Preloader />;
  }

  const handleLoadMoreClick = () => {
    if (currentParam === 1) {
      loadMoreMutate(offset);
      return;
    }
    loadMoreBy({
      offset: offset,
      categoryId: currentParam as number,
    });
  };

  return (
    <>
      {offset != 0 && (
        <div>
          <Button
            type="button"
            className={style.loadMore_btn}
            onClickHandler={handleLoadMoreClick}
          >
            Загрузить еще
          </Button>
        </div>
      )}
    </>
  );
};

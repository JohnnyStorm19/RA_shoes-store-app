import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AppContext } from "../../../app/providers/AppContextProvider";
import { loadMoreByCategory } from "../../../shared/api";
import { IContext, IProductCard } from "../../../shared/types";

export const useLoadMoreBy = () => {
  const { offset, offsetStep, setOffset } = useContext(AppContext) as IContext;
  const client = useQueryClient();

  return useMutation({
    mutationFn: loadMoreByCategory,
    onSuccess: (data) => {
      client.setQueryData(
        ["products", "catalogue"],
        (prevData: IProductCard[]) => {
          if (data && data.length >= 6) {
            setOffset(offset + offsetStep);
            return [...prevData, ...data];
          }
          setOffset(0);
        }
      );
    },
  });
};

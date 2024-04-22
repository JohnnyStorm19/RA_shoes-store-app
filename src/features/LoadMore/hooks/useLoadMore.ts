import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loadMore } from "../../../shared/api";
import { IContext, IProductCard } from "../../../shared/types";
import { useContext } from "react";
import { AppContext } from "../../../app/providers/AppContextProvider";

export const useLoadMore = () => {
  const { offset, offsetStep, setOffset } = useContext(AppContext) as IContext;

  const client = useQueryClient();
  return useMutation({
    mutationFn: loadMore,
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

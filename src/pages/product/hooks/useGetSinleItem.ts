import { useQuery } from "@tanstack/react-query";
import { getSingleItem } from "../../../shared/api";

export const useGetSingleItem = (id: string) => {
  return useQuery({
    queryFn: () => getSingleItem(Number(id)),
    queryKey: ["product"],
  });
};

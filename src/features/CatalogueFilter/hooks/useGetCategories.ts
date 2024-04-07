import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../shared/api";

export const useGetCategories = () => {
  return useQuery({
    queryFn: getCategories,
    queryKey: ["categories"],
  });
};

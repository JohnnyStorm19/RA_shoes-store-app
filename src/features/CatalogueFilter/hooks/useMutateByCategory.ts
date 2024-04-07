import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getItemsByCategory } from "../../../shared/api";

export const useMutateByCategory = () => {
    const client = useQueryClient();
    
    return useMutation({
        mutationFn: getItemsByCategory,
        onSuccess: (data) => {
          client.setQueryData(["products", "catalogue"], () => {
            if (data) {
              return data;
            }
          });
        },
      });
}
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllItems } from "../../../shared/api";

export const useGetAllItems = () => {
    const client = useQueryClient();
    
    return useMutation({
      mutationFn: getAllItems,
      onSuccess: (data) => {
        client.setQueryData(["products", "catalogue"], () => {
          if (data) {
            return data;
          }
        });
      },
    });
}


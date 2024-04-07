import { useMutation } from "@tanstack/react-query";

import { sendOrderData } from "../../../shared/api";
import { IFormData } from "../../../shared/types";

export const useSendOrderData = () => {
    return useMutation({
        mutationFn: (formData: IFormData) => {
          return sendOrderData(formData);
        }
      });
}
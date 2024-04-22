import { useContext, useEffect } from "react";

import { AppContext } from "../../app/providers";
import { IContext } from "../types";

export const useRefreshStorage = () => {
  const { cartProducts } = useContext(AppContext) as IContext;

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);
};

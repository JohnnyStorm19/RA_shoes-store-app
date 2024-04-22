import style from "./Layout.module.scss";

import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

import { AppContextProvider } from "../../../app/providers";

import { Footer, Header } from "../../../widgets";
import { Banner } from "../../../shared/ui";
import { ICartProduct } from "../../../shared/types";

const offsetStep = 6;
const storedCartProducts = localStorage.getItem("cartProducts");
const initialCartProducts = storedCartProducts
  ? JSON.parse(storedCartProducts)
  : [];

export const Layout = () => {
  const [offset, setOffset] = useState(offsetStep);
  const [cartProducts, setCartProducts] =
    useState<ICartProduct[]>(initialCartProducts);

  return (
    <AppContextProvider
      values={{ offset, offsetStep, cartProducts, setCartProducts, setOffset }}
    >
      <div className={style.container}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
        <Header />
        <Banner />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppContextProvider>
  );
};

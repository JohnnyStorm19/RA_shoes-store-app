import style from "./Header.module.scss";

import { OpenCart, SearchProducts } from "../../../features";
import { HeaderLogo, Navbar } from "../../../shared/ui";

const navLinks = [
  { id: 1, label: "Главная", route: "/" },
  { id: 2, label: "Каталог", route: "/catalogue" },
  { id: 3, label: "О магазине", route: "/about" },
  { id: 4, label: "Контакты", route: "/contacts" },
];

export const Header = () => {
  return (
    <header className={style.header}>
      <HeaderLogo />
      <Navbar links={navLinks} />
      <div className={style.actions_wrapper}>
        <SearchProducts variant="header" />
        <OpenCart />
      </div>
    </header>
  );
};

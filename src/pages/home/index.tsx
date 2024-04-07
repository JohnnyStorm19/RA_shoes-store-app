import style from "./HomePage.module.scss";

import { Bestsellers, Catalogue } from "../../widgets";

export const HomePage = () => {
  return (
    <div className={style.page_container}>
      <Bestsellers />
      <Catalogue />
    </div>
  );
};

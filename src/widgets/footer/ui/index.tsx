import { Link } from "react-router-dom";
import style from "./footer.module.scss";

const infoLabels = [
  {
    id: 1,
    label: "О магазине",
    route: "/about",
  },
  {
    id: 2,
    label: "Каталог",
    route: "/catalogue",
  },
  {
    id: 3,
    label: "Контакты",
    route: "/contacts",
  },
];

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={`${style.col} ${style.info}`}>
        <h5 className={style.footer_title}>Информация</h5>
        <ul className={style.info_list}>
          {infoLabels.map((info) => {
            return (
              <li key={info.id}>
                <Link className={style.info_link} to={info.route} key={info.id}>
                  {info.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={`${style.col} ${style.payment}`}>
        <h5 className={style.footer_title}>Принимаем к оплате:</h5>
        <ul className={style.paysystems}>
          <li className={`${style.paysystem} ${style.paypal}`}></li>
          <li className={`${style.paysystem} ${style.masterCard}`}></li>
          <li className={`${style.paysystem} ${style.visa}`}></li>
          <li className={`${style.paysystem} ${style.yandex}`}></li>
          <li className={`${style.paysystem} ${style.webmoney}`}></li>
          <li className={`${style.paysystem} ${style.qiwi}`}></li>
        </ul>
        <div className={style.copyright}>
          <p>
            2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
            аксессуаров. Все права защищены.
            <br />
            Доставка по всей России!
          </p>
        </div>
      </section>
      <section className={`${style.col} ${style.contacts}`}>
        <h5 className={style.footer_title}>Контакты:</h5>
        <ul>
          <li className={style.tel}>
            <a href="tel:+74957903503">+7 495 79 03 5 03</a>
          </li>
          <li className={style.daily}>
            <p>Ежедневно: с 09-00 до 21-00</p>
          </li>
          <li className={style.mail}>
            <a href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
          </li>
        </ul>
        <ul className={style.social_icons}>
          <li
            className={`${style.social_icon} ${style.social_icon_twitter}`}
          ></li>
          <li className={`${style.social_icon} ${style.social_icon_vk}`}></li>
          <li></li>
        </ul>
      </section>
    </footer>
  );
};

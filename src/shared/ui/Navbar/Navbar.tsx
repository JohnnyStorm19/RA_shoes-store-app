import { NavLink } from "react-router-dom";

import { TLink } from "./types";
import style from "./Navbar.module.scss";

interface INavbar {
  links: TLink[];
}

export const Navbar = ({ links }: INavbar) => {
  return (
    <nav className={style.navbar}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.route}
                className={({ isActive }) =>
                  isActive
                    ? `${style.navlink + " " + style.active}`
                    : style.navlink
                }
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

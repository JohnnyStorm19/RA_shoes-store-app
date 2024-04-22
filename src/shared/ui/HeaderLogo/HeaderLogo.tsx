import { Link } from "react-router-dom";

export const HeaderLogo = () => {
  return (
    <Link to={"/"}>
      <img src="/src/shared/assets/header-logo.png" alt="" />
    </Link>
  );
};

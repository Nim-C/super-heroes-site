import SearchElement from "./SearchElement";
import Logo from "@/assets/svg/logo.svg?react";

import "@/assets/styles/Header.css";

function Header() {
  return (
    <header>
      <Logo />
      <SearchElement />
      <span aria-hidden />
    </header>
  );
}

export default Header;

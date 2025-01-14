import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Header() {
  const { theme, toggleDarkMode } = useContext(DarkModeContext);

  return (
    // header--dark
    <header className={`header header--${theme}`}>
      <h1 className="header__title">헤더 컴포넌트</h1>
      <button className="header__button" onClick={() => toggleDarkMode()}>
        {theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
      </button>
    </header>
  );
}

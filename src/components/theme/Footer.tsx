import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Footer() {
  const { theme } = useContext(DarkModeContext);
  return (
    <footer className={`footer footer--${theme}`}>
      <p className="footer__text">푸터 컴포넌트</p>
    </footer>
  );
}

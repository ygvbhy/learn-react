import "./AppTheme.css";
import HeaderTheme from "./components/theme/Header";
import MainTheme from "./components/theme/Main";
import FooterTheme from "./components/theme/Footer";
import { DarkModeContext } from "./context/DarkModeContext";
import { useState } from "react";

function AppTheme() {
  // 현재 테마 상태 값
  const [theme, setTheme] = useState("light");
  // 테마 변경 함수
  const toggleDarkMode = () => {
    // 이전 상태 값을 받아서 테마 변경
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <DarkModeContext.Provider value={{ theme, toggleDarkMode }}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeContext.Provider>
  );
}

export default AppTheme;

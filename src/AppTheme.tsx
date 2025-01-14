import "./AppTheme.css";
import HeaderTheme from "./components/theme/Header";
import MainTheme from "./components/theme/Main";
import FooterTheme from "./components/theme/Footer";
import { DarkModeProvider } from "./context/DarkModeContext";

function AppTheme() {
  return (
    <DarkModeProvider initTheme={"light"}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeProvider>
  );
}

export default AppTheme;

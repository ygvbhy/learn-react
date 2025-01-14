import { createContext } from "react";

// 컨텍스트 생성
// theme 의 값을 boolean 으로 받지 않고 string 으로 받아서 진행
export const DarkModeContext = createContext({
  theme: "light",
  toggleDarkMode: () => {},
});

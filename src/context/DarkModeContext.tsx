import { createContext, useState } from "react";

// 컨텍스트 생성
// theme 의 값을 boolean 으로 받지 않고 string 으로 받아서 진행
export const DarkModeContext = createContext({
  theme: "light",
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({
  children,
  initTheme = "light",
}: {
  children: React.ReactNode;
  initTheme: string;
}) => {
  // 현재 테마 상태 값
  const [theme, setTheme] = useState(initTheme);
  // 테마 변경 함수
  const toggleDarkMode = () => {
    // 이전 상태 값을 받아서 테마 변경
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <DarkModeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

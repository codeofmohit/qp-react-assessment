import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { COLOR_SCHEME } from "../constants/constants";

const Theme = ({ children }: { children: React.ReactElement }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`theme ${theme.currentTheme}`}>
      <div
        className={`dark:text-[${COLOR_SCHEME.DARK_TEXT}] dark:bg-[${COLOR_SCHEME.DARK_BG}]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Theme;

import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { COLOR_SCHEME } from "../constants/constants";

const Theme = ({ children }: { children: React.ReactElement }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`theme ${theme.currentTheme}`}>
      <div
        className={`text-[${COLOR_SCHEME.LIGHT_TEXT}] dark:text-[${COLOR_SCHEME.DARK_TEXT}] bg-[${COLOR_SCHEME.LIGHT_BG}] dark:bg-[${COLOR_SCHEME.DARK_BG}]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Theme;

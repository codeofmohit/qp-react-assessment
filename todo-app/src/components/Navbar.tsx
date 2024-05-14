import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../theme/themeContext";
import { useContext } from "react";

const Navbar = () => {
  const theme = useContext(ThemeContext);

  const switchThemeHandler = () => {
    theme.toggleCurrentTheme();
  };

  return (
    <nav className="flex flex-col md:flex-row  justify-between items-center">
      <div className="logo">
        <h1 className="flex flex-col justify-center items-center md:items-start gap-2 ">
          <span className="font-bold text-3xl">Todo App</span>
          <span className="text-xs text-slate-700 dark:text-slate-300 mb-4 md:mb-0">
            data persisted via ls | pagination after 10 items
          </span>
        </h1>
      </div>
      <div className="light-dark-mode cursor-pointer">
        <button
          onClick={switchThemeHandler}
          className="theme flex gap-2 items-center rounded-lg border px-4 py-2 "
        >
          {theme.currentTheme === "light" ? (
            <>
              <span>
                <MdDarkMode />
              </span>
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <span>
                <MdOutlineLightMode />
              </span>
              <span>Light Mode</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

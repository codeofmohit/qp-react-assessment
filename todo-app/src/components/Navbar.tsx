import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../theme/themeContext";
import { useContext } from "react";

const Navbar = () => {
  const theme = useContext(ThemeContext);

  const switchThemeHandler = () => {
    theme.toggleCurrentTheme();
  };

  console.log(theme);

  return (
    <nav className="flex justify-between items-center">
      <div className="logo">
        <h1 className="font-bold text-3xl">Todo App</h1>
      </div>
      <div
        className="light-dark-mode cursor-pointer"
        onClick={switchThemeHandler}
      >
        <div className="theme flex gap-2 items-center rounded-lg border px-4 py-2 ">
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
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

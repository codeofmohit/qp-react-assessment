import { useState } from "react";
import Home from "./components/Home";
import { ThemeContext } from "./theme/themeContext";
import Theme from "./theme/Theme";

function App() {
  // handling theme switching dark <-> light
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    }
    if (currentTheme === "dark") {
      setCurrentTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleCurrentTheme }}>
      <Theme>
        <Home />
      </Theme>
    </ThemeContext.Provider>
  );
}

export default App;

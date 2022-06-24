// ------ useContext hook ------ //

import './App.css';
import React, { useState } from 'react';
import Content from './components/Content';


const themes = {
  light: {
    background: "#F8CB2E", color: "#000"
  },
  dark: {
    background: "#006E7F", color: "#fff"
  }
}

// Context
export const ThemeContext = React.createContext(themes.light);

const App = () => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if(theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  }

  return (
    <div className="container">
      <button className='btn' onClick={toggleTheme}> <i className="far fa-smile"></i> {theme === themes.dark ? "DARKTHEME" : "LIGHTTHEME"} </button>
      <ThemeContext.Provider value={theme}>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

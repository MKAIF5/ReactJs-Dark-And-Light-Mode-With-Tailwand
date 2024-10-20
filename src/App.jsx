import { useState } from 'react';
import { createContext } from 'react'
import ReactSwitch from 'react-switch';
import Form from './components/Form';
import './App.css'


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='app' id={theme}>
          <Form />
          <ReactSwitch className='relative bottom-20'
            onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </ThemeContext.Provider >
    </>
  )
}

export default App

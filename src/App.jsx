import { useState } from 'react';
import { createContext } from 'react'
import Form from './components/Form';
import './App.css'


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => {
      curr === "light" ? "dark" : "light"
    });
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='app' id={theme}>
          <Form />
        </div>
      </ThemeContext.Provider >
    </>
  )
}

export default App

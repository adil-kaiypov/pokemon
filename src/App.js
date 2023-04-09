import {Route, Routes} from 'react-router-dom';
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import { useState } from 'react';
import PokemonInfo from 'pages/PokemonInfo/PokemonInfo';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };


  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Routes>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/info/:name" element={<PokemonInfo/>}/>
        </Routes>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default App;


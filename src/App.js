import {EstilosGlobales } from "./EstilosGlobales";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { temaOscuro} from "./components/UI/Temas";
import { Home } from "./pages/Home";
import { Cabecera } from "./components/cabecera";
import { Error404 } from "./pages/Error404";

function App() {
  return (
      <ThemeProvider theme={temaOscuro}>
          <EstilosGlobales />
          <Router>
              <Cabecera />        
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<Error404 />} />

              </Routes>
          </Router>
      </ThemeProvider>
      );
    }
    
  export default App;

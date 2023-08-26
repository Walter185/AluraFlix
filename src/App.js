import {EstilosGlobales } from "./EstilosGlobales";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { temaOscuro} from "./components/UI/Temas";
import { Home } from "./pages/Home";

function App() {
  return (
      <ThemeProvider theme={temaOscuro}>
          <EstilosGlobales />
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>
          </Router>
      </ThemeProvider>
      );
    }
    
  export default App;

import {EstilosGlobales } from "./EstilosGlobales";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { temaOscuro} from "./components/UI/Temas";
import { Home } from "./pages/Home";
import { Cabecera } from "./components/Cabecera";
import { Error404 } from "./pages/Error404";
import { Video} from "./pages/Video";
import { EditarVideo } from "./pages/EditarVideo";
import { Categoria } from "./pages/Categoria";
import { EditarCategoria } from "./pages/EditarCategoria";
import { Foot } from "./components/Footer";
function App() {
  return (
      <ThemeProvider theme={temaOscuro}>
          <EstilosGlobales />
          <Router>
              <Cabecera />        
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/video/:id" element={<EditarVideo />} />
                    <Route path="/categoria" element={<Categoria />} />
                    <Route path="/categoria/:id" element={<EditarCategoria />} />
              </Routes>
              <Foot />
          </Router>
      </ThemeProvider>
      );
    }
    
  export default App;

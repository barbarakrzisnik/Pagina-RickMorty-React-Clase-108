import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import Personajes from "./components/Personajes";
import Ubicaciones from "./components/Ubicaciones";
import Episodios from "./components/Episodios";
import Footer from "./components/Footer";
import DetallesPersonajes from "./components/DetallesPersonajes";
import Main from "./components/Main"

const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="/personajes/:idPersonaje" element={<DetallesPersonajes />} />
      </Routes>
    </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;



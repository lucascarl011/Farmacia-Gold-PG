import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { ListarCategorias } from "./components/categorias/listarCategoria/ListarCategoria";
import { DeletarCategoria } from "./components/categorias/deletarCategoria/DeletarCategoria";
import { FormCategoria } from "./components/categorias/formCategoria/FormCategoria";


export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<ListarCategorias />} />
        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        <Route path="/cadastroCategoria" element={<FormCategoria />} />
        <Route path="/cadastroCategoria/:id" element={<FormCategoria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

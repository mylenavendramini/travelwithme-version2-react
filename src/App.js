import "./App.css";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Services from "./routes/services/services";
import Menu from "./components/menu/menu";

function App() {
  return (
    <div id="page-wrapper">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

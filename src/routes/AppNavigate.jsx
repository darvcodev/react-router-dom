import { Routes, Route } from "react-router-dom";

import { CssPage, HtmlPage, InicioPage, JsPage, ReactPage } from "../pages";
import { Navbar } from "./Navbar";

export const AppNavigate = () => {
  return (
    <div className="App">

      <Navbar />

      <h1>Bienvenido a React Router! 😊</h1>

      <Routes>
        <Route path="/*" element={<InicioPage />} />

        <Route path="/inicio" element={<InicioPage />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/js" element={<JsPage />} />
        <Route path="/react" element={<ReactPage />} />
        
      </Routes>
    </div>
  );
};

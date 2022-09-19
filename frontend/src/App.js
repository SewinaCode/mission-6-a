import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPage from "./pages/Home";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProductPage from "./pages/pbmech-frontpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/home" element={<CardPage />} />CardPage */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

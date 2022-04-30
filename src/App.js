import { Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Wishlist" element={<Wishlist />} />
        <Route path="Products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

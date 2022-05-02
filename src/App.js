import { Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/navbar/navbar";
import Shoppingcart from "./pages/Shoppingcart";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Wishlist" element={<Wishlist />} />
        <Route path="Products" element={<Products />} />
        <Route path="Shoppingcart" element={<Shoppingcart />} />
      </Routes>
    </div>
  );
}

export default App;

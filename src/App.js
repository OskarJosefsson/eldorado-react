import { Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/navbar/navbar";
import Shoppingcart from "./pages/Shoppingcart";
import Shop from "./pages/Shop";


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Wishlist" element={<Wishlist />} />
        <Route path="Products" element={<Products />} />
        <Route path="Shoppingcart" element={<Shoppingcart />} />
      </Routes>
    </>
  );
}

export default App;

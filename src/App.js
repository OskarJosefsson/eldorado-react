import { Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "../src/components/Navbar2/Navbar";
import Shoppingcart from "./pages/Shoppingcart";
import Shop from "./pages/Shop";
import Account from "./pages/Account";
import { AuthenticatedTemplate, MsalProvider } from "@azure/msal-react";

function App({ instance }) {
  return (
    <>
    <MsalProvider instance={instance}>
      <Navbar instance={instance}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Wishlist" element={<Wishlist />} />
        <Route path="Products" element={<Products />} />
        <Route path="Shoppingcart" element={<Shoppingcart />} />
      </Routes>
      <AuthenticatedTemplate>
        <Routes>
        <Route path="Account" element={<Account />} />
        </Routes>
        </AuthenticatedTemplate>
      </MsalProvider>
    </>
  );
}

export default App;

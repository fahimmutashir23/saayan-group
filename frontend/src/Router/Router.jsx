import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "@/Layout/Layout";
import Home from "@/Pages/Home/Home";
import Cart from "@/Pages/Cart/Cart";
import Shop from "@/Pages/Shop/Shop";
import NotFound from "@/Shared/ErrorPage/NotFound";
import Contact from "@/Pages/Contact/Contact";
import Register from "@/Pages/Auth/Register";
import Account from "@/Pages/Account/Account";
import CheckLogin from "@/Security/CheckLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/account"
            element={
              <CheckLogin>
                <Account />
              </CheckLogin>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

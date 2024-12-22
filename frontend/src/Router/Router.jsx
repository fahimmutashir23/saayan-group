import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "@/Layout/Layout";
import Home from "@/Pages/Home/Home";
import NotFound from "@/Shared/ErrorPage/NotFound";
import Contact from "@/Pages/Contact/Contact";
import Trade from "@/Pages/Group/Trade/Trade";
import Agro from "@/Pages/Group/Agro/Agro";
import Consultancy from "@/Pages/Group/Consultancy/Consultancy";
import Page_1 from "@/Pages/Group/Consultancy/Partial/Options/Page_1";
import Page_2 from "@/Pages/Group/Consultancy/Partial/Options/Page_2";
import Page_3 from "@/Pages/Group/Consultancy/Partial/Options/Page_3";
import Page_4 from "@/Pages/Group/Consultancy/Partial/Options/Page_4";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trades" element={<Trade />} />
          <Route path="/agro" element={<Agro />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultancy/page_1" element={<Page_1 />} />
          <Route path="/consultancy/page_2" element={<Page_2 />} />
          <Route path="/consultancy/page_3" element={<Page_3 />} />
          <Route path="/consultancy/page_3" element={<Page_4 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

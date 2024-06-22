
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CoreValues from "./Pages/CoreValues";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Product_Sec from "./Pages/Product_Sec";
import Blog from "./Pages/Blog";
import Service from "./Pages/Service";
import TableProduct from "./Pages/TableProduct";
import ScrollToTopButton from './Component/ScrollToTopButton';
function App() {
  return (
    <>  
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About-us" element={<AboutUs />} />
          <Route path="Product-1" element={<Product />} />
          <Route path="Product-Sec" element={<Product_Sec />} />
          <Route path="table-product" element={<TableProduct />} />
          <Route path="core-values" element={<CoreValues />} />
          <Route path="blog" element={<Blog />} />
          <Route path="service" element={<Service />} />
         
          <Route path="contact-us" element={<Contact />} />
        
        </Routes>
        <ScrollToTopButton ></ScrollToTopButton>
      </BrowserRouter>
    </>
  );
}

export default App;

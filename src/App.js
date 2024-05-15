import Header from "./components/Header/Header";
import ProductItems from "./components/Product/ProductItem";
import "bootstrap/dist/css/bootstrap.min.css";
import CartSection from "./components/Cart/Cart";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./store/CartProvider";
import AddContact from "./Pages/Contact";
import { Route , Routes } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";

function App() {
  return (
  <CartProvider>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<AddContact />} />
    <Route exact path="/store" element={<ProductItems />} />
    <Route path="/cart" element={<CartSection />} />
    <Route path="store/:productId" element={<ProductDetail />} />
  </Routes>
  < Footer/>
  </CartProvider>
  );
}

export default App;

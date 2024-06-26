import Header from "./components/Header/Header";
import ProductItems from "./components/Product/ProductItem";
import "bootstrap/dist/css/bootstrap.min.css";
import CartSection from "./components/Cart/Cart";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./store/CartProvider";
import AddContact from "./Pages/Contact";
import { Route } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";
import AuthForm from "./Pages/AuthForm";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import AuthContext from "./store/Auth-Context";
import ProductItem from "./components/Product/ProductItem";
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

function App() {
  const authCtx = useContext(AuthContext)
  return (
  <CartProvider>
    <Header />
    <Switch>
    <Route path="/"exact ><Home /></Route>
    {!authCtx.isLoggedIn && <Route path='/auth'>
          <AuthForm />
        </Route>}
        <Route path='/store'>
          {authCtx.isLoggedIn && <ProductItem/>}
          {!authCtx.isLoggedIn && < Redirect to = '/auth'/>}
        </Route>
    <Route path="/about"><About /></Route>
    <Route path="/auth"><AuthForm /></Route>
    <Route path="/contact"><AddContact /></Route>
    {/* <Route exact path="/store" ><ProductItems /></Route> */}
    <Route path="/cart" ><CartSection /></Route>
    <Route path="/store/:productId"><ProductDetail/></Route>
  </Switch>
  < Footer/>
  </CartProvider>
  );
}

export default App;

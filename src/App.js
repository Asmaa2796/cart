import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Topbar from "./components/Topbar";
import Copyright from "./components/Copyright";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path="/"
            element={
              <>
                <Topbar />
                <Home />
                <Copyright />
              </>
            }
          />
        <Route
            path="/details/:slug"
            element={
              <>
                <Topbar />
                <ProductDetails />
                <Copyright />
              </>
            }
          />
        <Route
            path="/cart"
            element={
              <>
                <Topbar />
                <Cart />
                <Copyright />
              </>
            }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

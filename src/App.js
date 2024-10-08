import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import NavbarComponent from './components/Navbar';
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavbarComponent />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart/*" element={<CartPage />} />
    </Route>
  )
)


function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

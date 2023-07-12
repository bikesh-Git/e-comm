import { Counter } from "./features/counter/Counter"
import "./App.css"
import Home from "./pages/HomePage"
import LoginPage from "./pages/LoginPage";
import Cart from './features/cart/Cart'
import CheckoutPage from './pages/CheckoutPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/checkoutPage",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage></ProductDetailsPage>,
  },
]);

function App() {
  return (
    <div className="App">

        <Counter />
      

      <RouterProvider router={router} />

    </div>
  )
}

export default App

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Products, RegisterPage } from "@/pages";
import { AuthLayout } from "@/layouts";
import { ROUTE_PATHS } from "./paths";
import Favorite from "@/pages/Favorite";
import Cart from "@/pages/Cart";
import ProductDetail from "@/pages/ProductDetail";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<MainLayout />}> */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTE_PATHS.HOME} element={<Home />} />
          <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
          <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
          <Route path={ROUTE_PATHS.PRODUCTS} element={<Products />}></Route>
          <Route
            path={ROUTE_PATHS.LOGIN}
            element={<Navigate to={ROUTE_PATHS.REGISTER} replace />}
          />
          {/* Redirect login to register for now */}
          <Route path={ROUTE_PATHS.FAVORITES} element={<Favorite />} />
          <Route
            path={ROUTE_PATHS.PRODUCT_DETAIL}
            element={<ProductDetail />}
          />
          <Route path={ROUTE_PATHS.CART} element={<Cart />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={ROUTE_PATHS.REGISTER} element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTE_PATHS.HOME} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

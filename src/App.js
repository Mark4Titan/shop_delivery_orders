import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import {  lazy } from "react";
//
import Main from "./SimpleShop/components/Main/Main";
import Footer from "./SimpleShop/components/Footer/Footer";
import Header from "./SimpleShop/components/Header/Header";
import ErrorPage from "./SimpleShop/ErrorPage/ErrorPage";
import Basket from "./SimpleShop/components/Basket/Basket";
import Likes from "./SimpleShop/components/Like/Like";
import ProductId from "./SimpleShop/components/ProductId/ProductId";
import Reviews from "./SimpleShop/Pages/Reviews/Reviews";
import Contacts from "./SimpleShop/Pages/Contacts/Contacts";
import Cooperation from "./SimpleShop/Pages/Cooperation/Cooperation";
import LoyaltyProgram from "./SimpleShop/Pages/LoyaltyProgram/LoyaltyProgram";
import Brands from "./SimpleShop/Pages/Brands/Brands";
import PaymentDelivery from "./SimpleShop/Pages/PaymentDelivery/PaymentDelivery";
import ProductReturn from "./SimpleShop/Pages/ProductReturn/ProductReturn";
import Blog from "./SimpleShop/Pages/Blog/Blog";
import Public from "./SimpleShop/Pages/Public/Public";
import { DynamicMain, DynamicDiv } from "./App.styled";


const Container = ({ children }) => {
  return (
    <>
      <Header />
      <DynamicMain>
        <DynamicDiv>
          {children}
        </DynamicDiv>
      </DynamicMain>
      <Footer />
    </>
  );
};

// const { pathname } = useLocation();
// console.log(pathname);

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    pathname !== "/" &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // console.log(pathname);
  }, [pathname]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/:id" element={<ProductId />} />
        {/*  */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/loyaltyProgram" element={<LoyaltyProgram />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/paymentDelivery" element={<PaymentDelivery />} />
        <Route path="/productReturn" element={<ProductReturn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/public" element={<Public />} />
        {/*  */}
        <Route path="/page" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './src/dashboard/Dashboard';
import Auth from './src/Authentication/Auth';
import { EmailVerificationLandingPage } from './src/Authentication/EmailVerificationLandingPage';
import ForgotPasswordPage from './src/Authentication/ForgotPasswordPage';
import RecoverPasswordPage from './src/Authentication/RecoverPasswordPage';
import { PleaseVerifyEmailPage } from './src/Authentication/PleaseVerifyEmailPage';
import Home from './src/components/Home';
import AddToCart from './src/components/AddToCart';
import Inovice from './src/components/Inovice';
import ProductDetails from './src/components/ProductDetails';
import AddEditProducts from './src/dashboard/Products/AddEditProducts';
const ReactRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path='/home-page' element={<Home/>}/>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/verify-email/:verificationString" element={<EmailVerificationLandingPage />} />
        <Route path='/please-verify' element ={<PleaseVerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:passwordResetCode" element={<RecoverPasswordPage />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/inovice" element={<Inovice />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/add-edit-products/:productId?" element={<AddEditProducts/>}/>
      </Routes>
    </Router>
  );
};

export default ReactRoutes;

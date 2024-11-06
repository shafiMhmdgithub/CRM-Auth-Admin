import React, { useState } from 'react';
import LoginPage from './LoginPage';  
import SignUpPage from './SignUpPage'; 

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // true for login, false for signup

  const toggleAuth = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div>
      {isLogin ? (
        <LoginPage  toggleAuth={toggleAuth}  setIsLogin={setIsLogin} />
      ) : (
        <SignUpPage toggleAuth={toggleAuth} />
      )}
    </div>
  );
};

export default Auth;

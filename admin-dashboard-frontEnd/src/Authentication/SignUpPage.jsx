import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../Auth/useToken';
const SignUpPage = ({toggleAuth}) => {
  const [token,setToken] =useToken();
  const navigate = useNavigate();
  const [fullNameValue,setFullNameValue]=useState('');
  const [emailValue,setEmailValue]=useState('');
  const [passwordValue,setPasswordValue]=useState('');
  const [confirmPasswordValue,setConfirmPasswordValue]=useState('');
const handleOnSubmit=async(e)=>{
  e.preventDefault();
  console.log("Name:",fullNameValue,"Email:",emailValue,"password:",passwordValue);
  try{
    const response = await axios.post('http://localhost:8080/api/signup',{
    name: fullNameValue,
    email: emailValue,
    password: passwordValue
   });
    const { token } = response.data;
    setToken(token);
    navigate('/please-verify')
    // Handle response (e.g., check for success)
    // if (response.status === 200) {
    //   console.log("Signup successful:", response.data);
    //   // const { token } = response.data;
    //   //   setToken(token);
    //   // Optionally redirect or show a success message here
    //  // toggleAuth(true); // Switch to the login page after successful signu
    //   }
  }catch(error){
    console.log(error);
  }
  toggleAuth(true);
}

  return (
   <div className="hold-transition register-page">
  <div className="register-box">
    <div className="card card-outline card-primary">
      <div className="card-header text-center">
      
        <Link href="#" className="h1"><b>Admin</b>LTE</Link>
      </div>
      <div className="card-body">
        <p className="login-box-msg">Register a new membership</p>
        <form onSubmit={handleOnSubmit} method="post">
          <div className="input-group mb-3">
            <input type="text" value={fullNameValue} 
            onChange={e=>setFullNameValue(e.target.value)}
             className="form-control" placeholder="Full name" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="email" value={emailValue}
            onChange={e=>setEmailValue(e.target.value)}
            className="form-control" placeholder="Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" value={passwordValue}
            onChange={e=>setPasswordValue(e.target.value)}
            className="form-control" placeholder="Password" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" value={confirmPasswordValue}
            onChange={e=>setConfirmPasswordValue(e.target.value)}
            className="form-control" placeholder="Retype password" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                <label htmlFor="agreeTerms">
                  I agree to the <a href="#">terms</a>
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
              <button
              disabled={!fullNameValue || !emailValue ||
                passwordValue !== confirmPasswordValue
              }
              type="submit" className="btn btn-primary btn-block">Register</button>
            </div>
            {/* /.col */}
          </div>
        </form>
        <div className="social-auth-links text-center">
          <a href="#" className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2" />
            Sign up using Facebook
          </a>
          <a href="#" className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2" />
            Sign up using Google+
          </a>
        </div>
        <Link to="#" onClick={toggleAuth} className="text-center">I already have a membership</Link>
      </div>
      {/* /.form-box */}
    </div>{/* /.card */}
  </div>
  {/* /.register-box */}</div>

  )
}

export default SignUpPage;
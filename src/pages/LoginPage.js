import React from 'react';
import { Redirect } from "react-router-dom";

import SocialButton from '../components/SocialButton';

import auth from "../Auth";

const handleSocialLogin = (user) => {
    console.log(user);
  }
  
  const handleSocialLoginFailure = (err) => {
    console.log(err);
  }

export const LoginPage = (props) => {
    if (auth.isAuthenticated()) {
        return (
            <Redirect to={
                {
                    pathname: "/"
                }
            } />
        )
    }

    return (
        <div>
            Login Page

            <SocialButton
        provider='facebook'
        appId='330327641460055'
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Facebook
      </SocialButton>
      <SocialButton
        provider='google'
        appId='1017755448411-35143ipetr1mik4useab40kp99qre3u3.apps.googleusercontent.com'
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Google
      </SocialButton>

            <button onClick={
                () => {
                    auth.login("token icitte", () => {
                        props.history.push("/");
                    });
                }
            }>Login</button>
        </div>
    )
};
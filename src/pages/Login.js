import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import SocialButton from "../components/SocialButton";

import { UserContext } from "../contexts/User";

import api from "../services/Api";

export const LoginPage = (props) => {
    const { token, setToken } = useContext(UserContext);

    const handleSocialLogin = (user) => {
        const provider = (user._provider === "facebook" ? "facebook" : "google-oauth2");
        api.post("oauth/login/", {
            provider,
            access_token: user._token.accessToken,
        }).then((response) => {
            setToken(response.token);
        });
    };

    const handleSocialLoginFailure = (err) => {
        console.log(err);
    };

    if (token !== "") {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div>
            Login Page
            <SocialButton
                provider="facebook"
                appId="330327641460055"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
            >
                Login with Facebook
            </SocialButton>
            <SocialButton
                provider="google"
                appId="1017755448411-35143ipetr1mik4useab40kp99qre3u3.apps.googleusercontent.com"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
            >
                Login with Google
            </SocialButton>
            <button
                onClick={() => {
                    setToken("aaaaa");
                }}
            >
                Login
            </button>
        </div>
    );
};

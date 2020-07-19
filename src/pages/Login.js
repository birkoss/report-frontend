import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import { UserContext } from "../contexts/User";

import api from "../services/Api";

import "./Login.css";

export const LoginPage = () => {
    const { token, setToken } = useContext(UserContext);

    const fetchUserToken = (provider, access_token) => {
        console.log(provider, access_token);
        api.post("social/login/", {
            provider,
            access_token,
        }).then((response) => {
            api.setToken(response.token);
            setToken(response.token);
        });
    }

    const responseGoogle = (response) => {
        console.log(response);
        if (response.accessToken) {
            fetchUserToken("google-oauth2", response.accessToken);
        }
    }

    const responseFacebook = (response) => {
        if (response.accessToken) {
            fetchUserToken("facebook", response.accessToken);
        }
    }

    if (token !== "") {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div className="login-page">
            <div className="box">
                <h1 className="text-center">Login</h1>
                <div className="text-center social-btn">
                    <GoogleLogin
                        clientId="1017755448411-35143ipetr1mik4useab40kp99qre3u3.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={
                            (props) => <a href="#" onClick={props.onClick} disabled={props.disabled} className="btn btn-danger btn-block"><i className="fa fa-google"></i> Login with <b>Google</b></a>
                        }
                    />
                    <FacebookLogin
                        appId="330327641460055"
                        fields="name,email,picture"
                        render={
                            (props) => <a href="#" onClick={props.onClick} disabled={props.isDisabled} className="btn btn-info btn-block"><i className="fa fa-facebook"></i> Login with <b>Facebook</b></a>
                        }
                        callback={responseFacebook} />
                </div>
            </div>
        </div>
    );
};

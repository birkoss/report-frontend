import React from 'react';
import { Route, Switch } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";

import { AppLayout } from "./components/AppLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import SocialButton from './components/SocialButton';

import './App.css';

const handleSocialLogin = (user) => {
  console.log(user);
}

const handleSocialLoginFailure = (err) => {
  console.log(err);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>

      </header>
    </div>
  );
}

export default App;

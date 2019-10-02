import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';
import Homepage from './session/homepage';

const App = () => (
    <div>
        <Link to={`/`}>greatbooks</Link>

        <h1>Meet your next favorite book!</h1>{/* remove later */}
        <Route exact path="/" component={Homepage} />
        <AuthRoute exact path="/sign_in" component={SigninFormContainer} />
        <AuthRoute exact path="/sign_up" component={SignupFormContainer} />
    </div>
);

export default App;
import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';

const App = () => (
    <div>
        <Link to={`/`}>greatbooks</Link>
        <h1>Meet your next favorite book!</h1>
        <SigninFormContainer /><br />
        <SignupFormContainer /><br />
        <Route path="/sign_in" component={SigninFormContainer} />
        <Route path="/sign_up" component={SignupFormContainer} />
    </div>
);

export default App;
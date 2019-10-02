import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';

const App = () => (
    <div>
        <Link to={`/`}>greatbooks</Link>

        <h1>Meet your next favorite book!</h1>{/* remove later */}
        <Route exact path="/" component={SigninFormContainer} />
        <Route exact path="/" component={SignupFormContainer} />
        <Route exact path="/sign_in" component={SigninFormContainer} />
        <Route exact path="/sign_up" component={SignupFormContainer} />
        {/* <Switch></Switch> */}
    </div>
);

export default App;
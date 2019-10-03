import React from 'react';
import SignupFormContainer from './signup_form_container';
import SigninFormContainer from './signin_form_container';
import DemoLoginContainer from './demo_login_container';

const Homepage = () => (
    <div>
        <h1>Meet your next favorite book!</h1>
        <DemoLoginContainer /><br />
        <SigninFormContainer /><br/>
        <SignupFormContainer />
    </div>
);

export default Homepage;
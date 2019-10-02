import React from 'react';
import SignupFormContainer from './signup_form_container';
import SigninFormContainer from './signin_form_container';

const Homepage = () => (
    <div>
        <SigninFormContainer />
        <br/>
        <SignupFormContainer />
    </div>
);

export default Homepage;
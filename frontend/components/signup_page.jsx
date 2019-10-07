import React from 'react';

import Logo from './general/logo_homepage_link';
import SignUpForm from './session/signup_form_container';

const SignUpPage= () => (
    <>
    <Logo />
    <div className="auth_standalone">
        <SignUpForm />
    </div>
    </>
);

export default SignUpPage;
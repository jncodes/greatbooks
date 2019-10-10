import React from 'react';

import Logo from './general/logo_homepage_link_container';
import SignInForm from './session/signin_form_container';

const SignInPage = () => (
    <>
    <Logo />
    <div className="auth_standalone">
        <SignInForm />
    </div>
    </>
);

export default SignInPage;
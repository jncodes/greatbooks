import React from 'react';
import Logo from './general/logo_homepage_link_container';
import SignInFormContainer from './session/signin_form_container';

const HeaderTopNav = () => {
    return (
        <nav className="header_top_nav">
            <Logo />
            <SignInFormContainer />
        </nav>
    );
};

export default HeaderTopNav;
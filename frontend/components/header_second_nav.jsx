import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import DemoLoginContainer from './session/demo_login_container';

const HeaderSecondNav = () => {
    return (
        <nav className="header_second_nav">
            <h1 className="homepage-greet">Meet your next favorite book!</h1>
            <div>
                <SignupFormContainer />
                <DemoLoginContainer />
            </div>
        </nav>
    );
};

export default HeaderSecondNav;
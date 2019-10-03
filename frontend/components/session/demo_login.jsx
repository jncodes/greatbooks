import React from 'react';

const DemoLogin = props => {
    return (
    <div>
        <button onClick={() => props.processForm(props.demo_user)} >Demo Login</button>
    </div>
    );
};

export default DemoLogin;
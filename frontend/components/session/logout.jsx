import React from 'react';

const Logout = props => {
    return (
        <div>
            <button onClick={() => props.processForm()} >Sign out</button>
        </div>
    );
};

export default Logout;
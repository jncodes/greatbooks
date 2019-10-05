import React from 'react';
import { Link } from 'react-router-dom';

const logo = () => {
    return (
        <div className="home-logo">
            <Link to={`/`}><span>great</span><strong>books</strong></Link>
        </div>
    )
}

export default logo;
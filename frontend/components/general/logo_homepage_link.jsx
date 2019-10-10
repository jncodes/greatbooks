import React from 'react';
import { Link } from 'react-router-dom';

const logo = props => {

    let page_type;
    if (props.location.pathname === '/') {
        page_type = "home-logo"
    } else {
        page_type = "pages-logo"
    }

    return (
        <div className={page_type}>
            <Link to={`/`}><span>great</span><strong>books</strong></Link>
        </div>
    )

};

export default logo;
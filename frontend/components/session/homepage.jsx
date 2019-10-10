import React from 'react';

import HeaderTopNav from '../header_top_nav';
import HeaderSecondNav from '../header_second_nav';
import Browse from '../browse_container';

const Homepage = () => (
    <div>
        <HeaderTopNav />
        <hr/>
        <HeaderSecondNav />
        {/* <hr/> */}
        <Browse />
    </div>
);

export default Homepage;
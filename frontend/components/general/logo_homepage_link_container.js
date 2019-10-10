import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LogoHomepageLink from './logo_homepage_link';

const msp = (state, props) => {
    return {};
};

const mdp = (dispatch, ownProps) => {
    return {};
};

export default withRouter(connect(msp, mdp)(LogoHomepageLink));
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchPage from './search_page';

const msp = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export default withRouter(connect(msp)(SearchPage));

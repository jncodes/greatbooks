import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ShowPage from './book_show_page';

const msp = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export default withRouter(connect(msp)(ShowPage));
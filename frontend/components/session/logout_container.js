import { connect } from 'react-redux';
import Logout from './logout';
import { logout } from '../../actions/session_actions';

const mdp = (dispatch, ownProps) => {
    return {
        processForm: () => dispatch(logout())
    };
};

export default connect(null, mdp)(Logout);
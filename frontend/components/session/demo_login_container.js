import { connect } from 'react-redux';
import DemoLogin from './demo_login';
import { signup } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    return { 
        demo_user: { username: `demo${getRandomArbitrary(100, 1000)}`, password: "worldsbestrecuiter" }
    };
};

const mdp = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(DemoLogin);
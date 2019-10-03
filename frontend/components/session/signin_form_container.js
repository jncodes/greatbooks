import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign in',
        navLink: <Link to={`/sign_up`}>Sign up</Link>,
        memberStatus: 'Not a member?',
        heading: ' to Greatbooks',
    };
};

const mdp = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SessionForm);
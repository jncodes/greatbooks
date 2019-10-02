import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign up',
        navLink: <Link to={`/sign_in`}>Sign in</Link>,
        memberStatus: 'Already a member?',
        heading: ' for Greatbooks',
    };
};

const mdp = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(SessionForm);
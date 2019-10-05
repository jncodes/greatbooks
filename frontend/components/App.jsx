import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';
import Homepage from './session/homepage';
import Logout from './session/logout_container';
import NavBarSearchContainer from '../components/search/navbar_search_container';
import BooksIndexContainer from '../components/books/books_index_container';

const App = () => (
    <div>
        <AuthRoute exact path="/" component={Homepage} />
        <Route path='/' component={NavBarSearchContainer} />
        <AuthRoute exact path="/sign_in" component={SigninFormContainer} />
        <AuthRoute exact path="/sign_up" component={SignupFormContainer} />
        <ProtectedRoute path="/" component={Logout}/>
        <Route path='/' component={BooksIndexContainer} />
    </div>
);

export default App;
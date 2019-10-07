import React from 'react';

import { Link, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SigninFormContainer from './session/signin_form_container';
import Homepage from './session/homepage';
import Logout from './session/logout_container';
import NavBarSearchContainer from '../components/search/navbar_search_container';
import BooksIndexContainer from '../components/books/books_index_container';
// import Browse from './browse';

import SignUpPage from './signup_page';
import SignInPage from './signin_page';

const App = () => (
    <div>
        <AuthRoute exact path="/" component={Homepage} />
        <AuthRoute exact path="/sign_in" component={SignInPage} />
        <AuthRoute exact path="/sign_up" component={SignUpPage} />

        <Route path='/' component={NavBarSearchContainer} />

        <ProtectedRoute path="/" component={Logout}/>
        <Route path='/search' component={BooksIndexContainer} />
        {/* <Browse /> */}
    </div>
);

export default App;
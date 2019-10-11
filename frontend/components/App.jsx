import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Logout from './session/logout_container';

import Homepage from './session/homepage';
import SearchPage from './search_page_container';
import ShowPage from './book_show_page_container';
import SignUpPage from './signup_page';
import SignInPage from './signin_page';

const App = () => (
    <div>
        <AuthRoute exact path="/" component={Homepage} />
        <AuthRoute exact path="/sign_in" component={SignInPage} />
        <AuthRoute exact path="/sign_up" component={SignUpPage} />

        <Route path='/search' component={SearchPage} />
        <Route path='/books/show/:bookId' component={ShowPage} />
        <Route path='/genres/:subject' component={SearchPage} />

        {/* <ProtectedRoute path='/' component={SearchPage} /> */}
        {/* <ProtectedRoute exact path="/" component={Logout}/> */}
        {/* <ProtectedRoute exact path="/" render={() => (<Redirect to="/search" />)} /> */}
        <Route path="/users/books/:userId" render={() => (<Redirect to="/search" />)} />
    </div>
);

export default App;
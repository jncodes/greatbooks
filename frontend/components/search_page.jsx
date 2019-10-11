import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './general/logo_homepage_link_container';
import NavBarSearchContainer from '../components/search/navbar_search_container';
import BooksIndexContainer from '../components/books/books_index_container';
import Logout from './session/logout_container'

const searchPage = props => {
    return (
        <div className="psuedo-body">
            <div className="navbar-container">
                <nav className="navbar">
                    <Logo />
                    <Link to="/">Home</Link>
                    <Link to="/users/books/:userId">My Books</Link>
                    <Link to="/search">Browse</Link>
                    <Link to="#">Community</Link>
                    <NavBarSearchContainer />
                    { props.loggedIn ? (<Logout />) : (
                        <>
                            <Link to="/sign_in">Sign In</Link>
                            <Link to="/sign_up">Join</Link>
                        </>
                    )}
                    {/* Log Out Link */}
                </nav>
            </div>
            <div className="content-container">
                <div className="content">
                    <div className="heading-container">
                        <p className="heading">Search</p>
                    </div>
                    <div className="results-container">
                        <BooksIndexContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default searchPage;
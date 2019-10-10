import React from 'react';
import Logo from './general/logo_homepage_link_container';
import NavBarSearchContainer from '../components/search/navbar_search_container';
import BooksShowContainer from '../components/books/books_show_container';

const showPage = () => (
    <>
        <nav>
            <nav>
                <Logo />
                <NavBarSearchContainer />
                {/* Sign In Link */}
                {/* Sign Up Link */}
                {/* Log Out Link */}
            </nav>
            <nav>
                {/* Home (My Books) Link */}
                {/* Browse (Search) Link */}
                {/* Discover Link */}
            </nav>
        </nav>
        <div>
            <BooksShowContainer />
        </div>
    </>
);

export default showPage;
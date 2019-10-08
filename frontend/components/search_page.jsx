import React from 'react';
import Logo from './general/logo_homepage_link';
import BooksIndexContainer from '../components/books/books_index_container';
import NavBarSearchContainer from '../components/search/navbar_search_container';

const searchPage = () => (
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
            <BooksIndexContainer />
        </div>
    </>
);

export default searchPage;
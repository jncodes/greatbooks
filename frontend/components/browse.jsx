import React from 'react';
import { Link } from 'react-router-dom';

import NavBarSearchContainer from '../components/search/navbar_search_container';

const BrowseSubjects = props => {
    const subjects = props.subjects.map((subject, idx) => {
        return (
            <div key={idx}>
                <Link  to={`genres/${subject}`}>{subject}</Link>
            </div>
        );
    });
    return (
        <div className="browse-box-container">
            <div className="browse-box">
                <p>Search and browse books</p>
                <NavBarSearchContainer />
                <div className="subject-list">
                    {subjects}
                </div>
            </div>
        </div>
    )
};

export default BrowseSubjects;
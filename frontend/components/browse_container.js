import { connect } from 'react-redux';
import Browse from './browse';

const msp = (state, props) => {
    
    const SUBJECTS = [
        "Art",
        "Biography",
        "Business",
        "Children's",
        "Christian",
        "Classics",
        "Comics",
        "Cookbooks",
        "Ebooks",
        "Fantasy",
        "Fiction",
        "Graphic Novels",
        "Historical Fiction",
        "History",
        "Horror",
        "Memoir",
        "Music",
        "Mystery",
        "Nonfiction",
        "Poetry",
        "Psychology",
        "Romance",
        "Science",
        "Science Fiction",
        "Self Help",
        "Sports",
        "Thriller",
        "Travel",
        "Young Adult"
    ]

    return {
        subjects: SUBJECTS
    };
};

export default connect(msp, null)(Browse);
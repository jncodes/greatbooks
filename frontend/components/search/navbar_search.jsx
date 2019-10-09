import React from 'react';
// import { Link } from 'react-router-dom';
// import BooksIndexContainer from '../components/books/books_index_container';

export default class navbarSearch extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
        this.previewSearch = this.previewSearch.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }

    previewSearch(e) {
        e.preventDefault();
        this.setState({ query: e.target.value }, () => {
            if (this.state.query === "") {
                null;
            } else {
                this.props.search(this.state.query);
            }
        }); 
    }

    // previewSearch(e) {
    //     e.preventDefault();
    //     this.setState({ query: e.target.value }, () => {
    //         if (this.state.query !== "") {
    //             this.props.search(this.state.query);
    //         }
    //     }); 
    // }
    
    submitSearch(e) {
        e.preventDefault();
        this.setState({ query: e.target.value }, () => {
            if (this.state.query !== "") {
                this.props.history.push(`/search`);
            }
        }); 
    }
    
    render() {
        return (
            <div className="searchbar">
               <form onSubmit={this.submitSearch}>
                    <input onChange={this.previewSearch} size="55" placeholder="Search" type="search"/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        ); 
    }
}

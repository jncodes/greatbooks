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
        // size="55" className="searchbar"
        return (
            <div >
               <form onSubmit={this.submitSearch}>
                    <input onChange={this.previewSearch} placeholder="Search" type="search"/>
                    {/* <input type="submit" value="Search" /> */}
                    {/* <img src="https://s.gr-assets.com/assets/layout/magnifying_glass-a2d7514d50bcee1a0061f1ece7821750.png" alt=""/> */}
                    <input type="image" src="https://s.gr-assets.com/assets/layout/magnifying_glass-a2d7514d50bcee1a0061f1ece7821750.png" alt="Submit"/>
                </form>
            </div>
        ); 
    }
}

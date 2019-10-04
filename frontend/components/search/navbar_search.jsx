import React from 'react';

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
            if (this.state.query !== "") {
                this.props.search(this.state.query);
            }
        }); 
    }

    submitSearch(e) {
        e.preventDefault();
        
    }

    render() {
       return (
            <div>
                <form onSubmit={this.submitSearch}>
                    <input onChange={this.previewSearch} placeholder="Search" type="search"/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        ); 
    }

}

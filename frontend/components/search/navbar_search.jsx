import React from 'react';

export default class navbarSearch extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
        this.previewSearch = this.previewSearch.bind(this);
    }

    previewSearch(e) {
        e.preventDefault();
        this.setState({ query: e.target.value }, () => {
            if (this.state.query !== "") {
                this.props.search(this.state.query);
            }
        }); 
    }

    render() {
       return (
            <div>
                <input onChange={this.previewSearch} placeholder="Search" type="search"/>
                <button>Search</button>
            </div>
        ); 
    }

}

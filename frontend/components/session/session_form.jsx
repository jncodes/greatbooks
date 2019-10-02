import React from 'react';

export default class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <form onSubmit={() => this.handleSubmit}>
                {this.props.formType}
                <br/>
                <label htmlFor="username">Name: </label>
                <input type="text" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" />
                <br/>
                <button type="submit">{this.props.formType}</button>
            </form>
        );
    }
}
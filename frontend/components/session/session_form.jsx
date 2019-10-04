import React from 'react';

export default class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.formType}
                {this.props.heading}
                <br/>
                <label htmlFor="email">Email: </label>
                <input onChange={this.update('email')} value={this.state.email} type="text" />
                <br />
                <label htmlFor="password">Password: </label>
                <input onChange={this.update('password')} value={this.state.password} type="password" />
                <br/>
                <input value={this.props.formType} type="submit" />
                {this.props.memberStatus}
                {this.props.navLink}
            </form>
        );
    }
}
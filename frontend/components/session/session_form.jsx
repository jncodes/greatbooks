import React from 'react';

export default class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
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

    renderErrors() {
        if (this.props.errors.length === 0) {
            return null;
        } else {
            return (
                <ul>
                    {
                        this.props.errors.map((error, idx) => (
                            <li key={`error-${idx}`}>{error}</li>
                        ))
                    }
                </ul>
            );
        }
    }

    render() {
        if (this.props.formType === 'Sign up') {
            return (    
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    {this.props.formType}
                    {this.props.heading}
                    <br />
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.update('name')} value={this.state.name} type="text" />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input onChange={this.update('email')} value={this.state.email} type="email" />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input onChange={this.update('password')} value={this.state.password} type="password" />
                    <br />
                    <input value={this.props.formType} type="submit" />
                    {this.props.memberStatus}
                    {this.props.navLink}
                </form>
            );
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    {this.props.formType}
                    {this.props.heading}
                    <br/>
                    <label htmlFor="email">Email: </label>
                    <input onChange={this.update('email')} value={this.state.email} type="email" />
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
}
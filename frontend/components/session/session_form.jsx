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
        let style;
        if (this.props.formType === 'Sign up') {style = 'signup';} else { style = 'signin'}
        return (    
            <form className={style} onSubmit={this.handleSubmit}>
                {this.renderErrors()}
                {/* {this.props.formType} */}
                {/* <span className="">{this.props.heading}</span> */}
                {this.props.formType === 'Sign up' ? (
                    <>
                        <input onChange={this.update('name')} value={this.state.name} type="text" placeholder="Name" />
                    </>
                ) : (
                        null
                    )}
                <input onChange={this.update('email')} value={this.state.email} type="email" placeholder="Email address" />
                <input onChange={this.update('password')} value={this.state.password} type="password" placeholder="Password" />
                <input value={this.props.formType} type="submit" />
                <br/>
                {/* <span className="next_to_signup" >{this.props.memberStatus}<span>{this.props.navLink}</span></span> */}
                {this.props.formType === 'Sign in' ? (
                    <>
                        <label className="next_to_signup">
                            <input type="checkbox" defaultChecked />
                            Remember me
                            <span>Forgot it?</span>
                        </label>
                    </>
                ) : (
                        null
                    )}
                {this.props.formType === 'Sign up' ? (
                    <>
                        <span className="next_to_home">Click on the <strong>demo login</strong> to see
                        <br/>more before signing up.
                        </span>
                    </>
                ) : (
                        null
                    )}
            </form>
        );
    }
}
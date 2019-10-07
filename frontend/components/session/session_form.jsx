import React from 'react';

export default class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            page: "",
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
    
    componentDidMount() {
        this.setState({ page: window.location.href });
    }

    render() {
        let style;
        if (this.props.formType === 'Sign up') {style = 'signup';} else {style = 'signin';}
        let path = "";
        if (this.state.page.includes('/sign_')) {path='-standalone';}
        let email_inside;
        this.state.page.includes('/sign_') ? (email_inside = 'you@yours.com') : (email_inside ='Email address')
        let password_inside;
        this.state.page.includes('/sign_') ? (password_inside = '') : (password_inside ='Password')

        return (    
            <form className={`${style}${path}`} onSubmit={this.handleSubmit}>
                
                {this.renderErrors()} {/* figure out a way to let this only render on one form or the other on the homepage */}
                
                {this.state.page.includes('/sign_') ? (<p className="auth_header">{this.props.formType + this.props.heading}</p>) : (null)}
                
                {this.props.formType === 'Sign up' && (!this.state.page.includes('/sign_')) ? 
                    (<div className="signuptop">
                        <p >New here? Create a free account!</p>
                    </div>
                    ) : (null)}
                
                {`${style}${path}`.includes('-standalone') && this.props.formType === 'Sign up' ? (<label>Name</label>) : (null)}
                {this.props.formType === 'Sign up' ? (
                    <input onChange={this.update('name')} value={this.state.name} type="text" placeholder="Name" />
                    ) : (null)}

                {`${style}${path}`.includes('-standalone') ? (<label>Email</label>) : (null)}
                <input onChange={this.update('email')} value={this.state.email} type="email" placeholder={email_inside} />
                
                {`${style}${path}`.includes('-standalone') ? (<label>Password</label>) : (null)}
                <input onChange={this.update('password')} value={this.state.password} type="password" placeholder={password_inside} />

                <input value={this.props.formType} type="submit" />
                <br/>

                {`${style}${path}`.includes('-standalone') ? (
                    <>
                        <span className="standalone_signup" >{this.props.memberStatus}</span>
                        <span className="standalone_signup" >{this.props.navLink}</span>
                    </>) : (null)}

                {this.props.formType === 'Sign in' && (!this.state.page.includes('/sign_')) ? (
                    <>
                        <label className="next_to_signup">
                            <input type="checkbox" defaultChecked />
                            Remember me
                        </label>
                        <span className="next_to_signup">Forgot it?</span>
                    </>
                ) : (null)}

                {this.props.formType === 'Sign up' && (!this.state.page.includes('/sign_')) ? (
                    <>
                        <span className="next_to_home">Click on the <strong>demo login</strong> to see
                        <br/>more before signing up.
                        </span>
                    </>
                ) : (null)}
            </form>
        );
    }
}
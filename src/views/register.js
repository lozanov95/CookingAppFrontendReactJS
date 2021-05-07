import React from "react";
import { register } from '../api/data.js';
import { ErrorDisplayComponent } from '../components/generic-components.js';
import { emailValidator, passwordValidator } from '../utils/validators.js';
import { parseErrorsToArray } from '../utils/utils.js';

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(ev) {
        ev.preventDefault();

        const errors = [];
        const formData = new FormData(ev.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const rePassword = formData.get('rePassword');
        const email = formData.get('email');

        if (username.length === 0 || password.length === 0 || rePassword.length === 0 || email.length === 0) {
            errors.push('All fields must be populated!');
        }
        if (password !== rePassword) {
            errors.push('The passwords must match!');
        }

        const passwordValidatorResp = passwordValidator(password);
        if (passwordValidatorResp !== true) {
            errors.push(passwordValidatorResp);
        }
        const emailValidatorResp = emailValidator(email);
        if (emailValidatorResp !== true) {
            errors.push(emailValidatorResp);
        }
        if (errors.length > 0) {
            return this.setState({ errors });
        }

        try {
            await register({ username, password, email });
            window.alert('Successfully registered! You can now login!');
            return window.location = '/login';
        } catch (err) {
            const errors = parseErrorsToArray(err);
            this.setState({ errors });
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="container-form">
                    {this.state.errors.length > 0 ?
                        <ErrorDisplayComponent errors={this.state.errors} /> : ''
                    }
                    <div className="center">
                        <h2>Register</h2>
                    </div>
                    <div>
                        <label>Username</label><input className="input-field" name="username"></input>
                    </div>
                    <div>
                        <label>Password</label><input type="password" className="input-field" name="password"></input>
                    </div>
                    <div>
                        <label>Repeat password</label><input type="password" className="input-field" name="rePassword"></input>
                    </div>
                    <div>
                        <label>Email</label><input className="input-field" name="email"></input>
                    </div>
                    <div>
                        <input className="btn" type="submit" value="Register"></input>
                    </div>
                </form>
            </div>
        )
    }
}
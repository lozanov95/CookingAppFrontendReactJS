import { Component } from "react";
import { ErrorDisplayComponent } from './generic-components.js';
import { login } from '../api/data.js';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const username = formData.get('username');
        const password = formData.get('password');


        const errors = [];

        if (username.length === 0 || password.length === 0) {
            errors.push('All fields must be populated!');
        }

        if (errors.length > 0) {
            return this.setState({ errors });
        }

        try {
            const { token, user_id } = await login({ username, password });
            sessionStorage.authToken = token;
            sessionStorage.userId = user_id;
            window.alert('You signed-in successfully!')
            window.location = '/';
        } catch (err) {
            this.setState({ errors: ['Username or password is incorrect!'] })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                {this.state.errors.length > 0 ?
                    <ErrorDisplayComponent errors={this.state.errors} /> : ''
                }
                <div className="center">
                    <h3>Login</h3>
                </div>
                <div>
                    <label>Username</label><input className="input-field" name="username" />
                </div>
                <div>
                    <label>Password</label><input className="input-field" name="password" type="password" />
                </div>
                <div>
                    <input className="btn" type="submit" value="Login" />
                </div>
            </form>
        );
    }
}
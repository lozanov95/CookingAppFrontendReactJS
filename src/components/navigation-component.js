import { Component } from "react";
import { logout } from '../api/data.js';

export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: false }

        this.handleClick = this.handleClick.bind(this);
    }

    checkState() {
        if (sessionStorage.getItem('authToken')) {
            this.setState({ authenticated: true });
        } else {
            this.setState({ authenticated: false });
        }
    }

    componentDidMount() {
        this.checkState();
    }

    async handleClick(ev) {
        ev.preventDefault();
        await logout();
        window.location = '/'
        this.checkState();
    }

    render() {
        return (
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        CookingApp
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className="nav-links left">
                    <a href='/' className="nav-link">Home</a>
                    <a href='/recipes' className="nav-link">Recipes</a>
                    {this.state.authenticated ? <a href='/myrecipes' className="nav-link">My recipes</a> : ""}
                    {this.state.authenticated ? <a href='/create' className="nav-link">Create recipe</a> : ""}
                    <a href='/about' className="nav-link">About</a>
                    {!this.state.authenticated ? <a href='/register' className="nav-link">Register</a> : ""}
                    {!this.state.authenticated ? <a href='/login' className="nav-link">Login</a> : ""}
                    {this.state.authenticated ? <a href='/' onClick={this.handleClick} className="nav-link">Logout</a> : ""}
                </div>
            </div>
        )
    }
}
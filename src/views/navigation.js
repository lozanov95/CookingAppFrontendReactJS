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
            <nav>
                <div className="left">
                    <a className="nav-item" href='/'>Home</a>
                    <a className="nav-item" href='/recipes'>Recipes</a>
                    {this.state.authenticated ? <a className="nav-item" href='/myrecipes'>My recipes</a> : ""}
                    {this.state.authenticated ? <a className="nav-item" href='/create'>Create recipe</a> : ""}
                    <a className="nav-item" href='/about'>About</a>
                </div>
                <div className="right">
                    {!this.state.authenticated ? <a className="nav-item" href='/register'>Register</a> : ""}
                    {!this.state.authenticated ? <a className="nav-item" href='/login'>Login</a> : ""}
                    {this.state.authenticated ? <a className="nav-item" href='/' onClick={this.handleClick}>Logout</a> : ""}
                </div>
            </nav>
        )
    }
}
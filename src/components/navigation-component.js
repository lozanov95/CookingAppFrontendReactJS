import { Component } from "react";
import { logout } from '../api/data.js';

export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: false, result: [] }

        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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

    async handleSearch(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const searchString = formData.get('searchString');
        window.location = '/search/' + searchString;
        /*
        let result = [];
        if (searchString.length > 0) {
            result = await searchRecipe(searchString);
        }
        this.setState({ result })
        */
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
                <div className="nav-links">
                    <div className="left">
                        <a href='/' className="nav-link">Home</a>
                        <a href='/recipes' className="nav-link">Recipes</a>
                        {this.state.authenticated ? <a href='/myrecipes' className="nav-link">My recipes</a> : ""}
                        {this.state.authenticated ? <a href='/create' className="nav-link">Create recipe</a> : ""}
                        <a href='/about' className="nav-link">About</a>

                        <form onSubmit={this.handleSearch} className="nav-search-form">
                            <input className="input-field" placeholder="search recipe by name" id="searchField" name="searchString" />
                            <input type="submit" value="Search" className="nav-search-btn" />
                        </form>

                        <SearchResult recipes={this.state.result} />
                    </div>
                    <div className="right">
                        {!this.state.authenticated ? <a href='/register' className="nav-link">Register</a> : ""}
                        {!this.state.authenticated ? <a href='/login' className="nav-link">Login</a> : ""}
                        {this.state.authenticated ? <a href='/' onClick={this.handleClick} className="nav-link">Logout</a> : ""}
                    </div>
                </div>
            </div>
        )
    }
}

function SearchResult(props) {
    return (
        <div className="search-container">
            {props.recipes.length > 0 ? props.recipes.map((el) => <SearchRow key={el.id} name={el.name} id={el.id} />) : ''}
        </div>
    )
}

function SearchRow(props) {
    return (
        <div className="search-row">{props.name} <a href={"/details/" + props.id} className="anchor-btn">View</a></div>
    )
}
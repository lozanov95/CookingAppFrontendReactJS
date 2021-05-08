import { CardSection } from '../components/card-component.js';
import { searchRecipe } from '../api/data.js';
import { Component } from 'react';

export class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: {}, emptyMessage: 'Loading...' }
    }

    async componentDidMount() {
        const searchString = this.props.match.params.searchString;
        const recipes = await searchRecipe(searchString);
        const emptyMessage = 'No results found.';
        this.setState({ recipes, emptyMessage });
    }

    render() {
        return (
            <CardSection recipes={this.state.recipes} emptyMessage={this.state.emptyMessage} />
        )

    }
}
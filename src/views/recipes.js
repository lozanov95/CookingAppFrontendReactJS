import React from 'react';
import { getRecipes } from '../api/data.js';
import { CardSection } from '../components/card-component.js';

export class RecipesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [], emptyMessage: 'Loading...' }
    }

    async componentDidMount() {
        const recipes = await getRecipes();
        const emptyMessage = 'There are no recipes yet.'
        this.setState({ recipes, emptyMessage })
    }

    render() {
        return (
            <CardSection recipes={this.state.recipes} emptyMessage={this.state.emptyMessage} />
        )
    }
}
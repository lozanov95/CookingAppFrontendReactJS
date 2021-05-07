import React from 'react';
import { getRecipesForCurrentUser } from '../api/data.js';
import { CardSection } from '../components/card-component.js'

export class MyRecipesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [], emptyMessage: 'Loading...' }
    }

    async componentDidMount() {
        const recipes = await getRecipesForCurrentUser();
        const emptyMessage = 'There are no recipes yet.'
        this.setState({ recipes, emptyMessage })
    }

    render() {
        return (
            <CardSection recipes={this.state.recipes} emptyMessage={this.state.emptyMessage} />
        )
    }
}
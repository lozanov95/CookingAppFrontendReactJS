import React from 'react';
import { getRecipes } from '../api/data.js';

function Card(props) {
    return (
        <div className="card">
            <div>
                <h3>{props.name}</h3>
                <img className="card-img" src={props.image_url} alt={props.name} />
            </div>
            <div>
                <a className="anchor-btn" href={props.href_url}>View</a>
            </div>
        </div>
    );
}

export class CardList extends React.Component {
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
            <div className="card-section">
                {this.state.recipes.length > 0 ?
                    this.state.recipes.map((el) => <Card key={el.id} name={el.name} image_url={el.image_url} href_url={'/details/' + el.id} />) :
                    <div>{this.state.emptyMessage}</div>}
            </div>
        )
    }
}
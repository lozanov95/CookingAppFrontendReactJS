import { Component } from "react";
import { getRecipeById } from '../api/data.js';

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { recipe: {}, isCreator: false }
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const recipe = await getRecipeById(id);
        const isCreator = recipe.creator_id.toString() === (sessionStorage.getItem('userId') || '').toString();
        this.setState({ recipe, isCreator });
    }

    render() {
        return (
            <div className="form-container center">
                <div>
                    <h1>{this.state.recipe.name}</h1>
                </div>
                <div>
                    <img className="img" src={this.state.recipe.image_url} alt={this.state.recipe.name} />
                </div>
                <div>
                    <label className="label">Ingredients</label>
                    <p>{this.state.recipe.ingredients}</p>
                </div>
                <div>
                    <label className="label">Preparation steps</label>
                    <p>{this.state.recipe.preparation_steps}</p>
                </div>
                <div>
                    <label className="label">Difficulty</label>
                    <p>{this.state.recipe.difficulty}</p>
                </div>
                <div>
                    {this.state.isCreator ? <a href={`/edit/${this.state.recipe.id}`} className="anchor-btn">Edit</a> : ''}
                    <a href={`/recipes`} className="anchor-btn">Back</a>
                </div>
            </div>
        )
    }
}
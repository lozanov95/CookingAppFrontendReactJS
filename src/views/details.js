import { Component } from "react";
import { getRecipeById } from '../api/data.js';

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { recipe: {} }
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const recipe = await getRecipeById(id);
        this.setState({ recipe });
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
                <a href={`/edit/${this.state.recipe.id}`} className="anchor-btn">Edit</a>
            </div>
        )
    }
}
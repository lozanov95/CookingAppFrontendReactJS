import { Component } from "react";
import { getRecipeById, deleteRecipe } from '../api/data.js';
import { CommentList } from '../components/comments-component.js';

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { recipe: {}, isCreator: false, id: this.props.match.params.id }

        this.handleDelete = this.handleDelete.bind(this);
    }

    async componentDidMount() {
        const recipe = await getRecipeById(this.state.id);
        const isCreator = recipe.creator_id.toString() === (sessionStorage.getItem('userId') || '').toString();
        this.setState({ recipe, isCreator });
    }

    async handleDelete(ev) {
        ev.preventDefault();
        if (window.confirm('Are you sure that you want to delete this recipe?')) {
            await deleteRecipe(this.state.id);
            window.alert('The recipe was deleted succesfully');
            window.location = '/';
        }
    }

    render() {
        return (
            <div className="container center column">
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
                    {this.state.isCreator ? <a href='/#' onClick={this.handleDelete} className="anchor-btn">Delete</a> : ''}
                    <a href={`/recipes`} className="anchor-btn">Back</a>
                </div>
                <CommentList recipeId={this.state.id} />
            </div>
        )
    }
}

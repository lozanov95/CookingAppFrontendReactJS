import { Component } from "react"
import { ErrorDisplayComponent } from './generic-components.js';
import { undefinedNullEmptyValidator, urlValidator } from '../utils/validators.js';
import { createRecipe } from "../api/data.js";
import { parseErrorsToArray } from "../utils/utils.js";

export class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const name = formData.get('name');
        const difficulty = formData.get('difficulty');
        const ingredients = formData.get('ingredients');
        const preparationSteps = formData.get('preparation_steps');
        const imageUrl = formData.get('imageUrl');

        const errors = [];

        if (undefinedNullEmptyValidator(name, difficulty, ingredients, preparationSteps, imageUrl) === false) {
            errors.push('All fields must be populated!');
        }

        const urlValidatorResp = urlValidator(imageUrl);
        if (urlValidatorResp !== true) {
            errors.push(urlValidatorResp);
        }

        if (errors.length > 0) {
            return this.setState({ errors })
        };

        const data = {
            name,
            difficulty,
            ingredients,
            preparation_steps: preparationSteps,
            image_url: imageUrl
        };
        try {
            await createRecipe(data);
            window.alert('The recipe was added succesfully!');
            window.location = '/';
        } catch (err) {
            const errors = parseErrorsToArray(err);
            this.setState({ errors });
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-container">
                {this.state.errors.length > 0 ?
                    <ErrorDisplayComponent errors={this.state.errors} /> : ''
                }
                <div>
                    <h2>Create new recipe</h2>
                </div>
                <div>
                    <label>Name</label><input className="input-field" name="name" />
                </div>
                <div>
                    <label>Difficulty</label>
                    <select name="difficulty">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label>Ingredients</label>
                    <textarea name="ingredients" />
                </div>
                <div>
                    <label>Preparation steps</label>
                    <textarea name="preparation_steps" />
                </div>
                <div>
                    <label>Image URL</label>
                    <input className="input-field" name="imageUrl" />
                </div>
                <div>
                    <input type="submit" className="btn" value="Create" />
                </div>
            </form>
        );
    }
}
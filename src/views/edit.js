import { Component } from "react";
import { SubmitRecipe } from './generic-components.js';
import { getRecipeById, editRecipe } from '../api/data.js';
import { undefinedNullEmptyValidator, urlValidator } from '../utils/validators.js';
import { parseErrorsToArray } from "../utils/utils.js";

export class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { recipe: {}, errors: {} }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const recipe = await getRecipeById(id);
        this.setState({ recipe })
    }

    async handleSubmit(ev) {
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
            await editRecipe(data, data);
            window.alert('The recipe was edited succesfully!');
            window.location = '/';
        } catch (err) {
            const errors = parseErrorsToArray(err);
            this.setState({ errors });
        }
    }

    render() {
        return (
            <SubmitRecipe errors={this.state.errors} recipe={this.state.recipe} handleSubmit={this.handleSubmit} title="Edit Recipe" btnName='Edit' />
        )
    }
}
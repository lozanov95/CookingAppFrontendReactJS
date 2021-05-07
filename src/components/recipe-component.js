import { ErrorDisplayComponent } from './generic-components.js';

export function SubmitRecipe(props) {
    return (
        <div className="container">
            <form onSubmit={props.handleSubmit} className="container-form center">
                {props.errors.length > 0 ?
                    <ErrorDisplayComponent errors={props.errors} /> : ''
                }
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div className="grid">
                    <label className="label">Name</label><input className="input-field" name="name" defaultValue={props.recipe ? props.recipe.name : ''} />
                </div>
                <div className="grid">
                    <label className="label">Difficulty</label>
                    <select className="input-field" name="difficulty" defaultValue={props.recipe ? props.recipe.difficulty : ''}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div className="grid">
                    <label className="label">Ingredients</label>
                    <textarea className="textarea-field" name="ingredients" defaultValue={props.recipe ? props.recipe.ingredients : ''} />
                </div>
                <div className="grid">
                    <label className="label">Preparation steps</label>
                    <textarea className="textarea-field" name="preparation_steps" defaultValue={props.recipe ? props.recipe.preparation_steps : ''} />
                </div>
                <div className="grid">
                    <label className="label">Image URL</label>
                    <input className="input-field" name="imageUrl" defaultValue={props.recipe ? props.recipe.image_url : ''} />
                </div>
                <div>
                    <input type="submit" className="btn" value={props.btnName} />
                </div>
            </form>
        </div>
    );
}

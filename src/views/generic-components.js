export function ErrorDisplayComponent(props) {
    return (
        <div className="error">
            {props.errors.map((err) => <p>{err}</p>)}
        </div>
    );
}

export function SubmitRecipe(props) {
    return (
        <form onSubmit={props.handleSubmit} className="form-container center">
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
    );
}

export function Card(props) {
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

export function CardSection(props) {
    return (
        <div className="card-section">
            {props.recipes.length > 0 ?
                props.recipes.map((el) => <Card key={el.id} name={el.name} image_url={el.image_url} href_url={'/details/' + el.id} />) :
                <div>{props.emptyMessage}</div>}
        </div>
    )
}
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
        <div className="container">
            {props.recipes.length > 0 ?
                props.recipes.map((el) => <Card key={el.id} name={el.name} image_url={el.image_url} href_url={'/details/' + el.id} />) :
                <div>{props.emptyMessage}</div>}
        </div>
    )
}
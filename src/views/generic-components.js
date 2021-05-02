
export function ErrorDisplayComponent(props) {
    return (
        <div className="error">
            {props.errors.map((err) => <p>{err}</p>)}
        </div>
    );
}
import { Component } from "react";
import { undefinedNullEmptyValidator } from '../utils/validators.js';
import { addComment, getComments } from '../api/data.js';

export class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: [], isAuthenticated: false, emptyMessage: 'Loading comments...' };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const isAuthenticated = sessionStorage.getItem('authToken') ? true : false;
        const comments = await getComments(this.props.recipeId);
        const emptyMessage = 'No comments yet.';
        this.setState({ comments, isAuthenticated, emptyMessage });
    }

    async handleSubmit(ev) {
        ev.preventDefault();
        const recipeId = this.props.recipeId;
        const formdata = new FormData(ev.target);
        const content = formdata.get('content');
        if (undefinedNullEmptyValidator(content)) {
            await addComment(recipeId, content);
            const comments = await getComments(recipeId);
            this.setState({ comments });
        }
    }


    render() {
        return (
            <div className="comments-container">
                <div>
                    <h2>Comments:</h2>
                </div>
                <div>
                    {this.state.comments.length > 0 ? this.state.comments.map((el) => <Comment author={el.author_id} content={el.content} />) : <p>{this.state.emptyMessage}</p>}
                </div>
                <div>
                    {this.state.isAuthenticated ? <AddComment handleSubmit={this.handleSubmit} /> : <div><p style={{ fontWeight: 600 }}>Sign-in to post a comment.</p></div>}
                </div>
            </div>
        )
    }
}

function Comment(props) {
    return (
        <div className="comments">
            <h3>{props.author}</h3>
            <p>{props.content}</p>
        </div>
    )
}

function AddComment(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <h2>Add comment</h2>
            <input className="input-field" name="content" />
            <input className="btn" type="submit" value="Add" />
        </form>
    )
}
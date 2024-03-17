import { Link, useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);

    return (
        <main className="post-page">
            <article className="post">
                {post && (
                    <>
                        <h4>{post.title}</h4>
                        <p>{post.datetime}</p>
                        <p>{post.body}</p>
                        <Link to={`/edit/${post.id}`}>
                            <button className="editButton">Edit Post</button>
                        </Link>
                        <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                )}
                {!post && (
                    <>
                        <p>Post not found</p>
                        <p>Well, that's dissapointing</p>
                        <p>
                            <Link to="/">Visit our Homepage</Link>
                        </p>
                    </>
                )}
            </article>
        </main>
    );
};

export default PostPage;
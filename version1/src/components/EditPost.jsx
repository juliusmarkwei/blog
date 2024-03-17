import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
    posts,
    handleEdit,
    editBody,
    setEditBody,
    editTitle,
    setEditTitle,
}) => {
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, []);

    return (
        <main className="NewPost">
            {editTitle && (
                <>
                    <h2>Edit Post</h2>
                    <form className="new-post-form" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title: </label>
                        <br />
                        <input
                            id="postTitle"
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <br />
                        <label htmlFor="postBody">Post: </label>
                        <br />
                        <textarea
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                            cols="70"
                            rows="8"
                        ></textarea>
                        <br />
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            )}
            {!editTitle && (
                    <>
                        <p>Post not found</p>
                        <p>Well, that's dissapointing</p>
                        <p>
                            <Link to="/">Visit our Homepage</Link>
                        </p>
                    </>
                )}
        </main>
    );
};

export default EditPost;

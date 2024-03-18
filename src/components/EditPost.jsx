import { useEffect, useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import { format } from "date-fns";

const EditPost = () => {
    const { posts, setPosts } = useContext(DataContext);
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);
    const navigate = useNavigate();

    const handleEdit = async (id) => {
        const datetime = format(new Date(), "dd/MMMM/yyyy");
        const updatedPost = { id, datetime, title: editTitle, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            setPosts(
                posts.map((post) =>
                    post.id === id ? { ...response.data } : post
                )
            );
            setEditTitle("");
            setEditBody("");
            navigate("/");
        } catch (err) {
            console.error(`Error: ${err.message}`);
        }
    };

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
                    <form
                        className="new-post-form"
                        onSubmit={(e) => e.preventDefault()}
                    >
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
                        <button
                            type="submit"
                            onClick={() => handleEdit(post.id)}
                        >
                            Submit
                        </button>
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

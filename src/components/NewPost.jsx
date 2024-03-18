import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import api from "../api/posts";
import { format } from "date-fns";

const NewPost = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const { posts, setPosts } = useContext(DataContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id =
            posts.length > 0 ? String(Number(posts[posts.length - 1].id) + 1) : 1;
        const datetime = format(new Date(), "dd/MMMM/yyyy pp");
        const newPost = { id, datetime, title: postTitle, body: postBody };
        try {
            const response = await api.post("/posts", newPost);
            const updatedPosts = [...posts, response.data];
            setPosts(updatedPosts);
            setPostBody("");
            setPostTitle("");
            navigate("/");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };

    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="new-post-form" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title</label>
                <br />
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <br />
                <label htmlFor="postBody">Post</label>
                <br />
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    cols="70"
                    rows="8"
                ></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default NewPost;

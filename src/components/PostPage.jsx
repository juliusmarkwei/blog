import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import api from '../api/posts'

const PostPage = () => {
    const {posts, setPosts} = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const updatedPosts = posts.filter((post) => id !== post.id);
            setPosts(updatedPosts);
            navigate("/");
        } catch (err) {
            console.error(`Error: ${err.message}`);
        }
    };

    return (
        <main className="post-page">
            <article className="single-post">
                {post && (
                    <>
                        <h3>{post.title}</h3>
                        <p className="post-date">{post.datetime}</p>
                        <p className="post-body">{post.body}</p>
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
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";
import About from "./components/About";
import Missing from "./components/Missing";
import PostPage from "./components/PostPage";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "./api/posts";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const [postBody, setPostBody] = useState("");
    const navigate = useNavigate();
    const { width } = useWindowSize();

    const { data, fetchError, isLoading } = useAxiosFetch(
        "http://localhost:3500/posts"
    );

    useEffect(() => {
        setPosts(data);
    }, [data]);

    useEffect(() => {
        const filteredResults = posts.filter(
            (post) =>
                post.body.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id =
            posts.length > 0 ? Number(posts[posts.length - 1].id) + 1 : 1;
        const datetime = format(new Date(), "dd/MMMM/yyyy");
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

    return (
        <>
            <Header title="Watchout for this space" width={width} />
            <Nav search={search} setSearch={setSearch} />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                posts={searchResults}
                                isLoading={isLoading}
                                fetchError={fetchError}
                            />
                        }
                    />
                    <Route
                        path="/post"
                        element={
                            <NewPost
                                handleSubmit={handleSubmit}
                                postTitle={postTitle}
                                setPostTitle={setPostTitle}
                                postBody={postBody}
                                setPostBody={setPostBody}
                            />
                        }
                    />
                    <Route
                        path="/edit/:id"
                        element={
                            <EditPost
                                posts={posts}
                                handleEdit={handleEdit}
                                editTitle={editTitle}
                                setEditTitle={setEditTitle}
                                editBody={editBody}
                                setEditBody={setEditBody}
                            />
                        }
                    />
                    <Route
                        path="/post/:id"
                        element={
                            <PostPage
                                posts={posts}
                                handleDelete={handleDelete}
                            />
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Missing />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import About from "./components/About";
import Missing from "./components/Missing";
import PostPage from "./components/PostPage";
import { useState, useEffect } from "react";
import { data } from "./assets/data/data";
import { Route, Routes, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const App = () => {
    const [posts, setPosts] = useState(data);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const filteredResults = posts.filter((post) => (
            post.body.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        ));
        setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length + 1;
        const datetime = format(new Date(), "dd/MMMM/yyyy");
        const newPost = { id, datetime, title: postTitle, body: postBody };
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        setPostBody("");
        setPostTitle("");
        navigate("/");
    };

    const handleDelete = (id) => {
        const updatedPosts = posts.filter((post) => id !== post.id);
        setPosts(updatedPosts);
        navigate("/");
    };

    return (
        <>
            <Header title="Watchout for this space" />
            <Nav search={search} setSearch={setSearch} />
            <main>
                <Routes>
                    <Route path="/" element={<Home posts={searchResults} />} />
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

import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";
import About from "./components/About";
import Missing from "./components/Missing";
import PostPage from "./components/PostPage";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

const App = () => {
    return (
        <>
            <Header title="Watchout for this space" />
            <DataProvider>
                <Nav />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post" element={<NewPost />} />
                        <Route path="/edit/:id" element={<EditPost />} />
                        <Route path="/post/:id" element={<PostPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Missing />} />
                    </Routes>
                </main>
            </DataProvider>
            <Footer />
        </>
    );
};

export default App;

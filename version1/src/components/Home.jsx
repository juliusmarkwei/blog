import Feed from "./Feed";

const Home = ({ posts }) => {
    return (
        <main className="Home">
            <div className="posts">
                {posts.length > 0 ? (
                    <Feed posts={posts} />
                ) : (
                    <p>No posts to display</p>
                )}
            </div>
        </main>
    );
};

export default Home;

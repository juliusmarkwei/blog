import Feed from "./Feed";

const Home = ({ posts, isLoading, fetchError }) => {
    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading posts...</p>}
            {!isLoading && fetchError && (
                <p className="statusMsg" style={{ color: "red" }}>
                    {fetchError}
                </p>
            )}
            {!isLoading &&
                !fetchError &&
                (posts.length ? (
                    <Feed posts={posts} />
                ) : (
                    <p>No posts to display.</p>
                ))}
        </main>
    );
};

export default Home;

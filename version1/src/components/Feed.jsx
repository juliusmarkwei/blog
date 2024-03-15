import Post from "./Post";

const Feed = ({ posts }) => {
    return (
        <article>
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </article>
    );
};

export default Feed;

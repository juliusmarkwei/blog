import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <article className="post">
            <div className="post-heading">
                <Link to={`/post/${post.id}`}>
                    <h3>{post.title}</h3>
                    <p className="post-date">{post.datetime}</p>
                </Link>
            </div>
            
            <p className="post-body">
                {post.body.length <= 25
                    ? post.body
                    : `${post.body.slice(0, 40)}...`}
            </p>
        </article>
    );
};

export default Post;

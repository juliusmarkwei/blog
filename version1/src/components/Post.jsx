import React from "react";

const Post = ({ post }) => {
    return (
        <article className="post">
            <div className="post-heading">
                <h3>{post.title}</h3>
                <p>{post.datetime}</p>
            </div>
            
            <div className="post-body">
                <p>
                    {post.body.length <= 25
                        ? post.body
                        : `${post.body.slice(0, 25)}...`}
                </p>
            </div>
        </article>
    );
};

export default Post;

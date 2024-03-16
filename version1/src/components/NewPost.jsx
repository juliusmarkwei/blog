import React from "react";

const NewPost = ({
    handleSubmit,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
}) => {
    return (
        <main className="NewPost">
            <form className="new-post-form" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title: </label><br />
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                /><br />
                <label htmlFor="postBody">Post: </label><br />
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    cols="70"
                    rows="8"
                ></textarea><br />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default NewPost;

import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
    return (
        <div>
            <p>Page not found</p>
            <p>Well, that's dissapointing!</p>
            <Link to="/">Visit our Homepage</Link>
        </div>
    );
};

export default Missing;

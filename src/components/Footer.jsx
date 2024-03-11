import React from "react";

function Footer({ length }) {
    return (
        <footer className="footer-container">
            <div>{length} List {length === 1  ? 'item' : 'items'}</div>
        </footer>
    );
}

export default Footer;

import React from "react";

function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

Header.defaultProps = {
    title: 'Default List'
}

export default Header;

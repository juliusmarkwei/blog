import React from "react";

function ListItem({item, index}) {
    return (
        <li key={index}>{item}</li>
    );
}

export default ListItem;

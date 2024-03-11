import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Biscuits",
            price: 20,
            checked: false,
            item: "This is a packet of biscuits",
        },
        {
            id: 2,
            name: "Chips",
            price: 30,
            checked: true,
            item: "This is a packet of chips",
        },
        {
            id: 3,
            name: "Cold Drink",
            price: 50,
            checked: true,
            item: "This is a bottle of cold drink",
        },
    ]);

    const handleChekBox = (index) => {
        const listItems = items.map((item, i) =>
            i === index ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        localStorage.setItem("shoppingList", JSON.stringify(listItems));
    };

    const handleDelete = (index) => {
        const listItems = items.filter((_, i) => i !== index);
        setItems(listItems);
        localStorage.setItem("shoppingList", JSON.stringify(listItems));
    };

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item, index) => (
                        <li className="item" key={index}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleChekBox(index)}
                            />
                            <label
                                style={
                                    item.checked
                                        ? { textDecoration: "line-through" }
                                        : null
                                }
                                onDoubleClick={() => handleChekBox(index)}
                            >
                                {item.item}
                            </label>
                            <FaTrashAlt
                                onClick={() => handleDelete(index)}
                                role="button"
                                tabIndex={0}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: "2rem" }}>Your list is empty</p>
            )}
        </main>
    );
}

export default Content;

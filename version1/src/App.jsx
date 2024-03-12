import React, { useState, useEffect } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

function App() {
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("shoppingList")) || []
    );
    const [search, setSearch] = useState("");
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        localStorage.setItem("shoppingList", JSON.stringify(items));
    }, [items]);

    const addItem = (item) => {
        const id = items.length + 1;
        const newItem = { id, item, checked: false };
        const listItems = [...items, newItem];
        setItems(listItems);
    };

    const handleChekBox = (index) => {
        const listItems = items.map((item, i) =>
            i === index ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
    };

    const handleDelete = (index) => {
        const listItems = items.filter((_, i) => i !== index);
        setItems(listItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem === "") return;
        addItem(newItem);
        setNewItem("");
    };

    return (
        <>
            <Header title="Grocery List" />
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem search={search} setSearch={setSearch} />
            <Content
                items={items.filter((item) =>
                    item.item.toLowerCase().includes(search.toLowerCase())
                )}
                handleChekBox={handleChekBox}
                handleDelete={handleDelete}
            />
            <Footer length={items.length} />
        </>
    );
}

export default App;

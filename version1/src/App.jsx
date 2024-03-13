import React, { useState, useEffect } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import apiRequest from "./utils/apiRequest";

function App() {
    const API_URL = "http://localhost:3500/items";

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [newItem, setNewItem] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error("Did not received expected data");
                const listItems = await response.json();
                setItems(listItems);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        setTimeout(() => {
            (async () => await fetchItems())();
        }, 2000);
    }, []);

    const addItem = async (item) => {
        const id = items.length + 1;
        const newItem = { id, checked: false, item };
        const listItems = [...items, newItem];
        setItems(listItems);

        const postOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem),
        };
        const result = await apiRequest(API_URL, postOptions);
        if (result) setFetchError(result);
    };

    const handleChekBox = async (id) => {
        console.log(id);
        const listItems = items.map((item, i) =>
            i === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);

        const myItem = listItems.filter((_, i) => i === id);
        console.log(myItem);
        const updateOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ checked: myItem[0].checked }),
        };
        const result = await apiRequest(`${API_URL}/${id + 1}`, updateOptions);
        if (result) setFetchError(result);
    };

    const handleDelete = async (id) => {
        const listItems = items.filter((_, i) => i !== id);
        setItems(listItems);

        const deleteOptions = {
            method: "DELETE",
        };
        const result = await apiRequest(`${API_URL}/${id + 1}`, deleteOptions);
        if (result) setFetchError(result);
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
            <main>
                {isLoading && <p>Loading Items...</p>}
                {fetchError && (
                    <p
                        style={{ color: "red", width: "200px", height: "20px" }}
                    >{`Error: ${fetchError}`}</p>
                )}
                {!fetchError && !isLoading && (
                    <Content
                        items={items.filter((item) =>
                            item.item
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )}
                        handleChekBox={handleChekBox}
                        handleDelete={handleDelete}
                    />
                )}
            </main>
            <Footer length={items.length} />
        </>
    );
}

export default App;

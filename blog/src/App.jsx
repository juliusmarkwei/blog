import React from "react";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/ListItem";

function App() {
    const API_URL = "https://jsonplaceholder.typicode.com";
    const [reqType, setReqType] = useState('users');
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${API_URL}/${reqType}`);
                if (!response.ok) {
                    const errorMessage = `Failed to fetch users data. Status: ${response.status}`;
                    throw new Error(errorMessage);
                }

                const userData = await response.json();
                setItems(userData);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, [reqType]);

    return (
        <>
            <Form reqType={reqType} setReqType={setReqType} />
            {isLoading ? <p>Loading Data...</p> : <List items={items} />}
        </>
    );
}

export default App;

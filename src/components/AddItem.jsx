import React from "react";
import { FaPlus } from "react-icons/fa";

function AddItem({ newItem, setNewItem, handleSubmit }) {
    return (
        <>
            <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="addItem">Add Item</label>
                <input
                    type="text"
                    autoFocus
                    id="addItem"
                    placeholder="Add Item"
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type="submit" aria-label="Add Item">
                    <FaPlus />
                </button>
            </form>
        </>
    );
}

export default AddItem;

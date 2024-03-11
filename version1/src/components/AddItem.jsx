import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

function AddItem({ newItem, setNewItem, handleSubmit }) {
    const inputRef = useRef(null);
    return (
        <>
            <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="addItem">Add Item</label>
                <input
                    type="text"
                    autoFocus
                    ref={inputRef}
                    id="addItem"
                    placeholder="Add Item"
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button
                    type="submit"
                    aria-label="Add Item"
                    onClick={() => inputRef.current.focus()}
                >
                    <FaPlus />
                </button>
            </form>
        </>
    );
}

export default AddItem;

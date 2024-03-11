import { FaTrashAlt } from "react-icons/fa";

function LineItem({ item, index, handleChekBox, handleDelete }) {
    return (
        <>
            <li className="item">
                <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleChekBox(index)}
                />
                <label
                    style={
                        item.checked ? { textDecoration: "line-through" } : null
                    }
                    onDoubleClick={() => handleChekBox(index)}
                >
                    {item.item}
                </label>
                <FaTrashAlt
                    onClick={() => handleDelete(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Delete ${item.item}`}
                />
            </li>
        </>
    );
}

export default LineItem;

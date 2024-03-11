import LineItem from "./LineItem";

function ItemList({ items, handleChekBox, handleDelete }) {
    return (
        <>
            <ul>
                {items.map((item, index) => (
                    <LineItem
                        item={item}
                        key={index}
                        index={index}
                        handleChekBox={handleChekBox}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    );
}

export default ItemList;

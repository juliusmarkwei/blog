import ItemList from "./ItemList";

function Content({ items, handleChekBox, handleDelete }) {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleChekBox={handleChekBox}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: "2rem" }}>Your list is empty</p>
            )}
        </>
    );
}

export default Content;

import ListItem from './ListItem'

function List({items}) {
    return (
        <ul>
            {items.map((item) => (
                <ListItem item={item} key={item.id} />
            ))}
        </ul>
    );
}

export default List;

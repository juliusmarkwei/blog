import ListItem from './ListItem'

function List({items}) {
    return (
        <ul>
            {items.map((item, index) => (
                <ListItem item={item} index={index} />
            ))}
        </ul>
    );
}

export default List;

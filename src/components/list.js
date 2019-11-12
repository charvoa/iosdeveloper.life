import React from "react"
import ListItem from "./listItem"

class List extends React.Component {
    render() {
        const listItems = [].concat(this.props.items).map((item, index, array) =>
            <ListItem
                name={item.name}
                chronology={item.chronology}
                category={item.category}
                level={item.level}
                comment={item.comment}
                key={index}
            />
        );

        return (
            <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        )
    }
}

export default List
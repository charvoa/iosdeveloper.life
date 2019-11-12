import React from "react"

class ListItem extends React.Component {

    // Level management
    levelColorLabel(level) {
        var labelClass = "tag"
    
        if (level === 1) {
            labelClass += " is-success"
        } else if (level === 2) {
            labelClass += " is-warning"
        } else if (level === 3) {
            labelClass += " is-danger"
        } else if (level === 4) {
            labelClass += " is-primary"
        } else if (level === 5) {
            labelClass += " is-info"
        }

        return labelClass
    }

    levelName = (level) => {
        var labelName = "..."
    
        if (level === 1) {
            labelName = "Core"
        } else if (level === 2) {
            labelName = "Ambition"
        } else if (level === 3) {
            labelName = "Ownership"
        } else if (level === 4) {
            labelName = "Team Work"
        } else if (level === 5) {
            labelName = "Go Beyond"
        }

        return labelName
    }

    render() {
        return (
            <tr>
                <td><input type="checkbox"></input></td>
                <td>{this.props.name}</td>
                <td><span className={this.levelColorLabel(this.props.level)}>{this.levelName(this.props.level)}</span></td>
                <td>{this.props.comment}</td>
            </tr>
        );
    }
}

export default ListItem;
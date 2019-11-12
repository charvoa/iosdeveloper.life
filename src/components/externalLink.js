import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ link, name, className, iconName}) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
        <span style={{"padding-right": "5px"}}><FontAwesomeIcon icon={iconName} /></span>
        <span>{name}</span>
    </a>
)
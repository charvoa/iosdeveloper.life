import React from "react"

export default ({ link, name, className }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className}>{name}</a>
)
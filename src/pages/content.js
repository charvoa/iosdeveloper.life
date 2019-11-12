import React from "react"
import { Tabs } from "@yazanaabed/react-tabs"
import List from "../components/list"

function JuniorContent() {
    const items = [
        // Core
        {name: "I have broad knowledge of core CS concepts.", level: 1, comment: ""},
        {name: "I write correct and clean code with some guidance; I consistently follows best practices", level: 1, comment: ""},
        {name: "I have knowledge of simple components of our architecture.", level: 1, comment: ""},
        // Ambition
        {name: "I understand my company business and missions and have functional and business awareness of your team scope and goals", level: 2, comment: ""},
        // Ownership
        {name: "I am capable of following guidelines and completing simple tasks in time and quality", level: 3, comment: ""},
        // Team Work
        {name: "I can work and collaborate effectively with other team members.", level: 4, comment: ""},
        {name: "I ensure good communication status to the team.", level: 4, comment: ""},
        {name: "I contribute positively to the team activities and success.", level: 4, comment: ""},
        // Go Beyond
        {name: "I focus on growing in the mastery of my skills, learning tech, tools and best practices.", level: 5, comment: ""},
        {name: "I develop and improve my productivity.", level: 5, comment: ""},
        {name: "I accept feedback and learn from everything I do.", level: 5, comment: ""},
    ]

    return (
        <List items={items} />
    )
}

function SubContent(type) {
    if (type == "junior") {
        return (
            JuniorContent()
        )
    } else {
        return (
            <p>Coming soon ...</p>
        )
    }
}

class Content extends React.Component {
    state = {
        tabs: [
            { index: 0, title: "Junior Engineer", content: SubContent("junior") },
            { index: 1, title: "Intermediate Engineer", content: SubContent("intermediate") },
            { index: 2, title: "Senior Engineer", content: SubContent("senior") },
            { index: 3, title: "Staff Engineer", content: null },
            { index: 4, title: "Engineering Manager", content: null },
            { index: 5, title: "Engeineering Exec", content: null },
        ]
    }

    render() {
        const tabsUI = this.state.tabs.map(element => {
            return (
                <Tabs.Tab id={element.index} title={element.title}>
                    <div style={{ padding: 10 }}>
                        {element.content}
                    </div>
                </Tabs.Tab>
            )
        })

        return (
            <Tabs
                activeTab={{
                    id: 0
                }} >
                {tabsUI}
            </Tabs>
        )
    }
}

export default Content;
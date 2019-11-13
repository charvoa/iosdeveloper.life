import React from "react"
import { Tabs } from "@yazanaabed/react-tabs"
import List from "../components/list"

const juniorItems = [
    // Core
    { name: "I have broad knowledge of core iOS concepts.", level: 1, comment: "I know how to setup a basic project, I know how to interact with a button from the storyboard" },
    { name: "I write correct and clean code with some guidance; I consistently follow best practices", level: 1, comment: "" },
    { name: "I have knowledge of simple components, and simple architectures.", level: 1, comment: "I know how to use MVC or MVVM" },
    // Ambition
    { name: "I understand my company business and missions and have functional and business awareness of the team's scope and goals", level: 2, comment: "" },
    // Ownership
    { name: "I am capable of following guidelines and completing simple tasks in time and with quality", level: 3, comment: "" },
    // Team Work
    { name: "I can work and collaborate effectively with other team members.", level: 4, comment: "" },
    { name: "I ensure good communication status to the team.", level: 4, comment: "" },
    { name: "I contribute positively to the team activities and success.", level: 4, comment: "" },
    // Go Beyond
    { name: "I focus on growing in the mastery of my skills, learning tech, tools and best practices.", level: 5, comment: "" },
    { name: "I develop and improve my productivity.", level: 5, comment: "" },
    { name: "I accept feedback and learn from everything I do.", level: 5, comment: "" },
]

const intermediateItems = [
    // Core
    { name: "I am self-sufficient in at least one large area of the codebase with a high-level understanding of other components.", level: 1, comment: "" },
    { name: "I begin to focus on attaining expertise in one or more areas.", level: 1, comment: "" },
    // Ambition
    { name: "I understand how my work fits in to the larger project and I identify problems with requirements", level: 2, comment: "" },
    // Ownership
    { name: "I am less dependent of others: I am confident in handling small scale projects. I am autonomous.", level: 3, comment: "" },
    { name: "I am capable of prioritizing tasks; I make steady progress; I know when to ask for help in order to get myself unblocked", level: 3, comment: "" },
    { name: "I take initiative to improve team's practices to make us better.", level: 3, comment: "" },
    // Team Work
    { name: "I communicate assumptions and I get clarification on tasks up front to minimize the need for rework", level: 4, comment: "" },
    { name: "I give timely, helpful feedback to peers and managers. I am able to challenge smartly and diplomatically.", level: 4, comment: "" },
    { name: "I am capable of providing support for my area including systems that I am not familiar with", level: 4, comment: "" },
    // Go Beyond
    { name: "I learn quickly and I make steady progress without the need for constant significant feedback from more senior engineers.", level: 5, comment: "" },
    { name: "I solicit feedback from others and I am eager to find ways to improve", level: 5, comment: "" },
    { name: "I contribute to tech projects of the Engineering Team", level: 5, comment: "" },
    { name: "I start being visible inside the team as a key contributor", level: 5, comment: "" },
]

const seniorItems = [
    // Core
    { name: "I have strong expertise in any part of the code of my area. I am capable of thinking strategically about the future of the code base.", level: 1, comment: "" },
    { name: "I understand and make well-reasoned design decisions and tradeoffs in my area; I design pragmatic solutions; I am able to work in other areas of the codebase with guidance.", level: 1, comment: "" },
    { name: "I know how to challenge QA on test cases and provide advice on adjacent code/regression impact.", level: 1, comment: "" },
    { name: "I proactively identify problems with requirements (lack of clarity, inconsistencies, technical limitations) for my own work and adjacent work, and communicates these issues early to help course-correct", level: 1, comment: "" },
    { name: "I possess empathy with the user of the software I am producing and use that empathy to guide decision-making", level: 1, comment: "" },
    // Ambition
    { name: "I demonstrate strong business knowledge: business strategy, roadmap, product knowledge, company/culture awareness, cross departmental interactions", level: 2, comment: "" },
    { name: "I am able to contribute to the vision to meet our business goals.", level: 2, comment: "" },
    { name: "I start being visible in the tech community and to evangelize around the company.", level: 2, comment: "" },
    // Ownership
    { name: "I have end-to-end responsibility of delivering projects of increasing complexity", level: 3, comment: "" },
    { name: "I contribute to areas across several teams.", level: 3, comment: "" },
    { name: "I identify problems/risks of my own work and others.", level: 3, comment: "" },
    { name: "I push for Quality at all levels.", level: 3, comment: "" },
    // Team Work
    { name: "I am able to communicate and partner effectively across functions (dev, QA, product, design, marketing, user support). I am able to communicate with technical and non-technical people.", level: 4, comment: "" },
    { name: "I coach and mentor junior members.", level: 4, comment: "" },
    { name: "I contribute to recruitment, interviewing, team organization", level: 4, comment: "" },
    // Go Beyond
    { name: "I am persistent in the face of roadblocks; I dispatch them efficiently, pulling in others as necessary. I require minimal direction/oversight.", level: 5, comment: "" },
    { name: "I contribute actively and frequently outside my team.", level: 5, comment: "" },
    { name: "I promote my work and achievements across the organization.", level: 5, comment: "" },
    { name: "I show interest in multiple roles like scrum mastering, project management, product / user experience etc", level: 5, comment: "" },
]

const staffItems = [
    // Core
    { name: "I am an expert on large sections of our codebase", level: 1, comment: "" },
    { name: "I have expertise on our architecture and on best architecture concepts", level: 1, comment: "" },
    { name: "I am capable of debugging the hairiest problems that the team encounters", level: 1, comment: "" },
    { name: "I lead the conversations internally about the direction of major areas of the technology, I drive wide-team consensus to the adoption of this direction, and I use this direction to inspire engineers", level: 1, comment: "" },
    { name: "I am sought out for technical guidance; I anticipate technical issues at the product level and I make architectural and design decisions to avoid them", level: 1, comment: "" },
    // Ambition
    { name: "I support the business team from a technical standpoint. I can attend meeting with business stakeholders and share complex technical concepts in layman's terms", level: 2, comment: "" },
    { name: "I communicate about business strategy", level: 2, comment: "" },
    { name: "I communicate the awesomeness of my company's engineering team externally via talks and blog posts. I identify areas that my company can share effectively with the outside world and guide the creation of content and communication around these areas.", level: 2, comment: "" },
    // Ownership
    { name: "I am recognized as a prolific contributor to core and side projects", level: 3, comment: "" },
    { name: "I am consistently able to reduce the complexity of projects, services, and processes in order to get more done with less work", level: 3, comment: "" },
    { name: "I set short to medium-term strategic direction, able to look ahead 6-12 months and identify the areas of greatest need and create plans to improve them", level: 3, comment: "" },
    // Team Work
    { name: "I am seen as a role model and mentor to every member of the team", level: 4, comment: "" },
    { name: "I listen and guide debates to help reach a consensus; once a decision is made, I clearly communicate and back that decision", level: 4, comment: "" },
    { name: "I help people and team grow, learn, get better. I open doors to any new interest they show", level: 4, comment: "" },
    // Go Beyond
    { name: "I have made an obvious positive impact on the entire company's trajectory.", level: 5, comment: "" },
    { name: "I support innovation, creation, initiatives, opens doors.", level: 5, comment: "" },
    { name: "I stay on top of best practices of the industry: technological watch and communication about it.", level: 5, comment: "" },
]

const managerItems = [
    // Core
    { name: "I have strong technical knowledge of the scope of the team.", level: 1, comment: "" },
    { name: "I understand, support and evolve our Agile Organization and our Management.", level: 1, comment: "" },
    { name: "I am proactive in identifying and clearing roadblocks for the team", level: 1, comment: "" },
    { name: "I am able to identify areas of strategic technical debt and provide cost/benefit analysis for eliminating this debt and suggested timelines for how to prioritize it", level: 1, comment: "" },
    { name: "I own the key driver of performance, stability, robustness and scalability of the product.", level: 1, comment: "" },
    // Ambition
    { name: "I partner effectively with product to manage scope and deliverables for the technical side of the product roadmap", level: 2, comment: "" },
    { name: "I am able to understand and translate the Company vision and goals effectively to the team.", level: 2, comment: "" },
    // Ownership
    { name: "I lead the delivery of major initiatives on clear timelines", level: 3, comment: "" },
    { name: "I lead cross team projects, technically and non-technically", level: 3, comment: "" },
    { name: "I delegate effectively; I ensure tasks are completed as specified without micromanaging", level: 3, comment: "" },
    { name: "I am focused on and responsible for the team's productivity and collective impact", level: 3, comment: "" },
    { name: "I support and challenge technical design and architecture of the team.", level: 3, comment: "" },
    // Team Work
    { name: "I communicate context to the team and I surface concerns and requirements to upper management.", level: 4, comment: "" },
    { name: "I am able to lead recruiting efforts and determine headcount for their team", level: 4, comment: "" },
    { name: "I set clear expectations for team members; I solicit, synthesize and deliver feedback", level: 4, comment: "" },
    { name: "I contribute to clear communication of timeline, scope and technical concerns to stakeholders.", level: 4, comment: "" },
    { name: "I meet regularly with my direct reports, I provide frequent feedback on their work, I help the individuals set goals and work with Engineering Execs to ensure employee growth and retention goals", level: 4, comment: "" },
    { name: "I am comfortable managing team members with different skill sets and technical areas of focus", level: 4, comment: "" },
    // Go Beyond
    { name: "I am recognized across the organization as the team leader because of my team's contribution and not only because of his own.", level: 5, comment: "" },
    { name: "I contribute to the career development of others.", level: 5, comment: "" },
    { name: "I make independent decisions for the team; I am actively learning how to handle difficult management situations.", level: 5, comment: "" },
    { name: "I have found the right balance between technical work and management time.", level: 5, comment: "" },
    { name: "I challenge the status quo and continuously tries to raise the bar for his team.", level: 5, comment: "" },
    { name: "I experiment new process & tools, and share them to help other teams to improve.", level: 5, comment: "" },
]

const execItems = [
    // Core
    { name: "I contribute to engineering strategy by asking the right questions to ensure it matches business needs for the area", level: 1, comment: "" },
    { name: "As necessary, I manage vendor and external relationships and I participate in the budgeting process", level: 1, comment: "" },
    { name: "I sell my company and the engineering team to potential candidates. I inspire potential recruits to join the company.", level: 1, comment: "" },
    { name: "I own setting objectives and following performance review process for teams under my oversight.", level: 1, comment: "" },
    // Ambition
    { name: "I am able to communicate technical concepts to business stakeholders as well as communicate business objectives to the technical team.", level: 2, comment: "" },
    // Ownership
    { name: "I build and support high functioning, motivated teams.", level: 3, comment: "" },
    { name: "I develop and deploy strategies for building a high velocity, high performance development organization in line with our needs.", level: 3, comment: "" },
    { name: "I provide leadership to engineering team members, I address technical, resource and personnel issues, so that things get done.", level: 3, comment: "" },
    { name: "I create an organization that understands how to balance technical debt vs business goals.", level: 3, comment: "" },
    { name: "I am capable of jumping in to help debug and triage critical systems as needed.", level: 3, comment: "" },
    // Team Work
    { name: "I participate in staff recruitment, performance assessments, training, and career development. I am responsible for all headcount planning and personnel evolution for multiple areas of the engineering organization.", level: 4, comment: "" },
    { name: "I collaborate across functional areas to define, prioritize and ensure implementation of specific innovations to improve technical functionality in support of business needs, efficiencies and revenue.", level: 4, comment: "" },
    { name: "I leverage past experience and uses strong communication skills to collaborate effectively with all stakeholders including customers, senior management and other business leaders.", level: 4, comment: "" },
    // Go Beyond
    { name: "I ensure the organization has appropriately high technical competence and strives for excellence.", level: 5, comment: "" },
    { name: "I proactively nurture the talent of staff and help them grow.", level: 5, comment: "" },
    { name: "I support technical innovation and lead the creation, continual refinement, and active enforcement of our development standards in order to ensure that our technology can be leveraged as a sustainable competitive advantage.", level: 5, comment: "" },
    { name: "I researches new technologies to stay abreast of industry trends and standards.", level: 5, comment: "" },
    { name: "I always look on how to raise the bar on all practices: management, project, technical.", level: 5, comment: "" },
]

function SubContent(type) {
    if (type == "junior") {
        return (
            <List items={juniorItems} />
        )
    } else if (type === "intermediate") {
        return (
            <List items={intermediateItems} />
        )
    } else if (type === "senior") {
        return (
            <List items={seniorItems} />
        )
    } else if (type === "staff") {
        return (
            <List items={staffItems} />
        )
    }else if (type === "manager") {
        return (
            <List items={managerItems} />
        )
    }else if (type === "exec") {
        return (
            <List items={execItems} />
        )
    } else {
        return (
            <div>Coming soon ...</div>
        )
    }
}

class Content extends React.Component {
    state = {
        tabs: [
            { index: 0, title: "Junior Engineer", content: SubContent("junior") },
            { index: 1, title: "Intermediate Engineer", content: SubContent("intermediate") },
            { index: 2, title: "Senior Engineer", content: SubContent("senior") },
            { index: 3, title: "Staff Engineer", content: SubContent("staff") },
            { index: 4, title: "Engineering Manager", content: SubContent("manager") },
            { index: 5, title: "Engineering Exec", content: SubContent("exec") },
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
import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Meta from "../components/metadata"
import ExternalLink from "../components/externalLink"

class Ressources extends React.Component {
  render() {
    return (
      <Container>
        <Meta pageTitle="Resources" />
        <Header />
        <section className="hero is-info" style={{"border-radius": "10px"}}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Resources</h1>
              <h2 className="subtitle"> Find books, videos, website about SRE Mobile Applications</h2>
            </div>
          </div>
        </section>
        <section className="section">
          <Container>
            <ExternalLink
              name="Google Engineering Reliable Mobile Applications"
              link="https://landing.google.com/sre/resources/practicesandprocesses/engineering-reliable-mobile-applications/"
            />
          </Container>
        </section>
      </Container>
    )
  }
}

export default Ressources
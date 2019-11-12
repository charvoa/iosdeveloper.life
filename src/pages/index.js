import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Disclaimer from "../components/disclaimer"
import Intro from "../components/intro"
import Meta from "../components/metadata"
import Content from "./content"

class App extends React.Component {

  render() {
    return (
      <Container>
        <Meta pageTitle="How to become a better iOS Developer ?" />
        <Header />
        <Content></Content>
        <Intro />
        <Disclaimer/>
      </Container>
    )
  }
}

export default App;
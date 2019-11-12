import React from "react"
import { Link } from "gatsby"
import ExternalLink from "../components/externalLink"

export default () => (
  <nav
    id="navigationBar"
    className="navbar"
    role="navigation"
    aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img
          src={"logo.png"}
          alt="iOS Developer.Life logo" />
      </Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/contributors" className="navbar-item">
          Contributors
        </Link>
        <Link to="/resources" className="navbar-item">
          Resources
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <ExternalLink
              name="Twitter"
              link="https://twitter.com/NicolasCharvoz"
              className="button is-light"
            />
            <ExternalLink
              name="Github"
              link="https://github.com/charvoa/iosdeveloper.life"
              className="button is-light"
            />
            <a
              className="twitter-share-button button is-info"
              href="https://twitter.com/intent/tweet?text=Just%20discovered%20this%20website%2C%20a%20control%20checklists%20about%20how%20to%20become%20a%20better%20iOS%20engineer%20!%20https%3A%2F%2Fiosdeveloper.life"
              data-size="large"
              data-text="Just discovered this website, a control checklists about how to become a better iOS Engineer!"
              data-url="https://iosdeveloper.life"
              data-hashtags="mobileengineering"
              target="_blank"
              rel="noopener noreferrer" >
              Share on twitter
            </a>
            <ExternalLink
              name="Contribute"
              link="https://github.com/charvoa/iosdeveloper.life/issues/new/choose"
              className="button is-warning"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
)

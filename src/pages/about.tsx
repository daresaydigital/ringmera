import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import { IndexLayout } from "../layouts"
import { Page } from "../components/Page"
import { Container } from "../components/Container"

const AboutPage = () => {
  const intl = useIntl()
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>404: Page not found.</h1>
          <p>
            You've hit the void. <Link to="/">Go back.</Link>
          </p>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default AboutPage
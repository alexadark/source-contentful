/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment headingBlockFragment on ContentfulComponentHeading {
    heading
    type
    centered
  }
`

export const HeadingBlock = ({ heading, type, centered }) => {
  const style = centered && { textAlign: `center`, variant: `text.heading` }
  return (
    <Heading as={type} sx={{ textTransform: `uppercase`, ...style }}>
      {heading}
    </Heading>
  )
}

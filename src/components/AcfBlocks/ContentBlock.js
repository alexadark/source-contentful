/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment contentBlockFragment on ContentfulComponentTextEditor {
    content {
      childMarkdownRemark {
        html
      }
    }
  }
`

export const ContentBlock = ({ content }) => (
  <Box
    dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
    sx={{
      maxWidth: `l`,
      mx: `auto`,
      mb: 7,
      mt: 5,
    }}
  />
)

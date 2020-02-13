/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment contentBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ContentBlock {
    content
  }
`

export const ContentBlock = ({ content }) => (
  <Box
    dangerouslySetInnerHTML={{ __html: content }}
    sx={{
      maxWidth: `l`,
      mx: `auto`,
      mb: 7,
      mt: 5,
    }}
  />
)

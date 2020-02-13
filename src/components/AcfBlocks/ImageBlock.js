/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { graphql } from "gatsby"
import GatsbyImg from "../GatsbyImage"

export const fragment = graphql`
  fragment imageBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ImageBlock {
    image {
      ...GatsbyImageQuery
    }
  }
`

export const ImageBlock = ({ image }) => {
  return (
    <Box
      sx={{
        ".gatsby-image-wrapper": {
          borderRadius: `10px`,
          maxHeight: 400,
          maxWidth: 700,

          boxShadow: `default`,
          mx: `auto`,
          my: 10,
        },
      }}
    >
      <GatsbyImg img={image} />
    </Box>
  )
}

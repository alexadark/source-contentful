/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const fragment = graphql`
  fragment imageBlockFragment on ContentfulComponentImage {
    image {
      title
      fluid(maxWidth: 1200, quality: 80) {
        ...GatsbyContentfulFluid_tracedSVG
      }
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
      <Img fluid={image.fluid} alt={image.title} />
    </Box>
  )
}

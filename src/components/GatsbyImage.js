/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const GatsbyImage = ({ img }) => img && <Img fluid={img.fluid} />

export default GatsbyImage

export const query = graphql`
  fragment GatsbyImageQuery on ContentfulAsset {
    title
    fluid(maxWidth: 1200, quality: 80) {
      ...GatsbyContentfulFluid_tracedSVG
    }
  }
`

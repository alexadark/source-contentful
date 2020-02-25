/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BgImage from "../components/BgImage"

const SinglePOST = ({ data }) => {
  const { content, image, title } = data.contentfulPost

  return (
    <Layout>
      <Container sx={{ maxWidth: `l` }}>
        <BgImage img={image} height="400px" />
        <Box sx={{ variant: `card.default` }}>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <Box
            className="content"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </Box>
      </Container>
    </Layout>
  )
}
export default SinglePOST

export const pageQuery = graphql`
  query GET_POST($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      content {
        content
      }
      image {
        ...GatsbyImageQuery
      }
    }
  }
`

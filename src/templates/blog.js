/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
// import Pagination from "../components/Pagination"
import BgImage from "../components/BgImage"

const Blog = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.nodes
  // const { pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext
  return (
    <Layout>
      <Container sx={{ maxWidth: `l` }}>
        {data &&
          data.allContentfulPost &&
          posts.map(post => (
            <article key={post.id}>
              <Link to={`/posts/${post.slug}`}>
                <Box>
                  <BgImage img={post.image} height="400px" />
                </Box>
              </Link>
              <Box sx={{ variant: `card.default`, mb: 8 }}>
                <h2>
                  <Link
                    to={`/posts/${post.slug}`}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                    sx={{ color: `text`, "&:hover": { color: `primary` } }}
                  />
                </h2>
                <Box
                  className="content"
                  dangerouslySetInnerHTML={{ __html: post.content.content }}
                />
                <Flex
                  sx={{
                    justifyContent: [`center`, `flex-end`],
                    mt: 7,
                    mr: [0, 10],
                  }}
                >
                  <Link
                    to={`/posts/${post.slug}`}
                    sx={{ variant: `buttons.secondary` }}
                  >
                    Read More
                  </Link>
                </Flex>
              </Box>
            </article>
          ))}
        {/* <Pagination
          pageNumber={pageNumber}
          hasNextPage={hasNextPage}
          allPosts={allPosts}
          itemsPerPage={itemsPerPage}
        /> */}
      </Container>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query GET_POSTS($skip: Int!, $limit: Int!) {
    allContentfulPost(limit: $limit, skip: $skip) {
      nodes {
        id
        slug
        title
        content {
          content
        }

        image {
          ...GatsbyImageQuery
        }
      }
    }
  }
`
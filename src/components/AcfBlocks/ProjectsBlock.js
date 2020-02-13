/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import Project from "./ProjectItem"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment projectsBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ProjectsBlock {
    subtitle
    title
    projects {
      ... on WPGraphQL_Project {
        id
        featuredImage {
          ...GatsbyImageQuery
        }
        slug
        title
        uri
        projectFields {
          projectUrl
        }
      }
    }
  }
`

export const ProjectsBlock = ({ content, title, subtitle, projects }) => {
  return (
    <Box sx={{ my: 10 }}>
      <Box sx={{ textAlign: `center` }}>
        <h3
          dangerouslySetInnerHTML={{ __html: title }}
          sx={{
            variant: `text.heading`,
          }}
        />

        <h4
          dangerouslySetInnerHTML={{ __html: subtitle }}
          sx={{ textAlign: `center`, mb: 40 }}
        />
      </Box>
      <Flex sx={{ flexWrap: `wrap`, justifyContent: `center`, my: 10 }}>
        {projects.map(project => (
          <Project project={project} />
        ))}
      </Flex>
    </Box>
  )
}

/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import GatsbyImage from "../GatsbyImage"

const ProjectItem = ({ project }) => {
  const {
    title,
    projectFields: { projectUrl },
    featuredImage,
    id,
  } = project
  return (
    <Box
      className="project"
      key={id}
      sx={{ width: [`100%`, `50%`, `33%`], px: 5, mb: 30 }}
    >
      <Flex
        sx={{
          bg: `white`,
          boxShadow: `small`,
          pb: 2,
          height: `100%`,
          flexDirection: `column`,
          justifyContent: `space-between`,
          transition: `all .4s ease-in-out`,
          borderRadius: 5,
          "&:hover": {
            boxShadow: `default`,
            transform: `translateY(-5px)`,
          },
        }}
      >
        <GatsbyImage img={featuredImage} />
        <Box>
          <h4 sx={{ textAlign: `center`, mb: `10px` }}>{title}</h4>
          <Flex sx={{ justifyContent: `center`, mb: 6, mt: 4 }}>
            <a
              sx={{ variant: `buttons.primary` }}
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default ProjectItem

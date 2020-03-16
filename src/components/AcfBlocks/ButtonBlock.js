/** @jsx jsx */
import { jsx, Button, Flex, Box } from "theme-ui"
import { graphql, Link } from "gatsby"
import config from "../../../config"

export const fragment = graphql`
  fragment buttonBlockFragment on ContentfulComponentButton {
    variant
    position
    link
    label
  }
`

export const ButtonBlock = ({ variant, link, label, position }) => {
  const style =
    position === "center"
      ? { justifyContent: `center` }
      : position === "left"
      ? { justifyContent: `start` }
      : { justifyContent: `end` }
  return (
    <Flex sx={style}>
      <Box>
        <Button variant={variant || "primary"}>
          <Link to={link}>{label}</Link>
        </Button>
      </Box>
    </Flex>
  )
}

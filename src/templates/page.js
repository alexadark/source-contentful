/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import {
  ButtonBlock,
  ContentBlock,
  HeadingBlock,
  ImageBlock,
  ProjectsBlock,
} from "../components/AcfBlocks"

const Page = ({ data }) => {
  const { title, blocks } = data.contentfulPage
  return (
    <Layout>
      {blocks.length > 0 &&
        blocks.map(block => {
          switch (block.__typename) {
            case "ContentfulComponentTextEditor":
              return <ContentBlock {...block} />
            case "ContentfulComponentHeading":
              return <HeadingBlock {...block} />
            case "ContentfulComponentImage":
              return <ImageBlock {...block} />
            case "ContentfulComponentButton":
              return <ButtonBlock {...block} />
            case "ContentfulComponentProjects":
              return <ProjectsBlock {...block} />
            default:
              return ""
          }
        })}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      blocks {
        __typename
        ...contentBlockFragment
        ...projectsBlockFragment
        ...imageBlockFragment
        ...headingBlockFragment
        ...buttonBlockFragment
      }
    }
  }
`

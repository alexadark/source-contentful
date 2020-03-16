/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

// import {
//   ButtonBlock,
//   ContentBlock,
//   HeadingBlock,
//   ImageBlock,
//   ProjectsBlock,
// } from "../components/AcfBlocks"

const Page = ({ data }) => {
  const { title } = data.contentfulPage
  return (
    <Layout>
      <h1>{title}</h1>
      {/* {flexibleLayouts.length > 0 &&
        flexibleLayouts.map(block => {
          switch (block.__typename) {
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ContentBlock":
              return <ContentBlock {...block} />
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_HeadingBlock":
              return <HeadingBlock {...block} />
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ImageBlock":
              return <ImageBlock {...block} />
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ButtonBlock":
              return <ButtonBlock {...block} />
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ProjectsBlock":
              return <ProjectsBlock {...block} />
            default:
              return ""
          }
        })} */}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
    }
  }
`

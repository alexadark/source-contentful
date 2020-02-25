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
  const {
    title,
    content,
    excerpt,
    flexLayouts: { flexibleLayouts },
  } = data.wpgraphql.page
  return (
    <Layout>
      {content && (
        <Box
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
          sx={{ variant: `card.default` }}
        />
      )}
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
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
        # flexLayouts {
        #   flexibleLayouts {
        #     __typename
        #     ...contentBlockFragment
        #     ...projectsBlockFragment
        #     ...imageBlockFragment
        #     ...headingBlockFragment
        #     ...buttonBlockFragment
        #   }
        # }
      }
    }
  }
`

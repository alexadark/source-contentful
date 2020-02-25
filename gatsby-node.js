const { createRemoteFileNode } = require("gatsby-source-filesystem")

const createPosts = require(`./create/createPosts`)
const createSitePages = require(`./create/createSitePages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createSitePages({ actions, graphql })
}

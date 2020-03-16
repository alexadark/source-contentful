/** @jsx jsx */
import { jsx, Flex, NavLink } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"

const MENU_QUERY = graphql`
  query MenuQuery {
    allContentfulNavigation {
      nodes {
        menuItems {
          slug
          title
        }
      }
    }
  }
`

const Menu = () => {
  const data = useStaticQuery(MENU_QUERY)
  const { menuItems } = data.allContentfulNavigation.nodes[0]
  return (
    <nav sx={{ variant: `menus.header` }}>
      <ul>
        {menuItems.map(item => (
          <li className="menu-item">
            <Link to={`/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu

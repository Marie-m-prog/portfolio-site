import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
	const posts = data.allContentfulBlog.edges;

  return (
	<div>
    <SEO title="Blog" />
    <h1>Blog</h1>
		<ul>{}</ul>
	</div>
	)
}

export default BlogPage

export const postQuery = graphql`
query BlogQuery {
	allContentfulBlog(sort: { fields: [publishDate], order: DESC }) {
    edges {
      node {
        date(formatString: "DD/MM/YYYY")
        slug
        title
        content {
          raw
        }
      }
    }
  }
}
`
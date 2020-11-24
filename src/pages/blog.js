import React from "react"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview.js"
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  const posts = data.allContentfulBlog.edges;

  return (
	<div id='blog'>
    {console.log('here are the posts')}
    <SEO title="Blog" />
    <h1>Blog</h1>
		<ul>{posts.map(post => 
      <PostPreview node={post.node}/>
    )}</ul>
	</div>
	)
}

export default BlogPage

export const postQuery = graphql`
query BlogQuery {
	allContentfulBlog(sort: { fields: [date], order: DESC }) {
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
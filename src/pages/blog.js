import React from "react"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview.js"
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  const posts = data.allContentfulBlog.edges;

  return (
    <div id='blog'>
      <SEO title="Blog" />
      <div className="posts-container">
        <div className="header-text">
          <h1 className="name">Marie W. Madsen</h1>
          <p>Fullstack JavaScript Developer</p>
        </div>
        <div className="welcome">
          <h1>Welcome to my blog!</h1>
          <p>This is a space for me to process and share the things I've learned on my journey to become a developer</p>
        </div>
        <ul >{posts.map(post => 
          <PostPreview node={post.node}/>
        )}</ul>
      </div>
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
        previewImg {
          fluid(maxWidth: 200, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`
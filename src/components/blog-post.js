import React from "react"
import SEO from "./seo"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Text = ({ node, children }) => {
	return <div className="align-center">{children}</div>
}

const Code = ({ children }) => {
	return <div className="code">
		<SyntaxHighlighter language="javascript" style={atomDark}>
			{children}
		</SyntaxHighlighter>
	</div>
}

const options = {
	renderMark: {
		[MARKS.CODE]: text => <Code>{text}</Code>
	},
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text node={node}>{children}</Text>,
  },
}

const BlogPost = ({ data }) => {
  const { title, content } = data.allContentfulBlog.edges[0].node;
  const text = documentToReactComponents(JSON.parse(content.raw), options);

  return (
    <div id='blog'>
      <SEO title={title} />
      <div className="posts-container">
        <div className="header-text">
          <h1 className="name">Marie W. Madsen</h1>
          <p>Fullstack JavaScript Developer</p>
        </div>
        <div className="welcome">
          <h1>{title}</h1>
          {text}
        </div>
      </div>
    </div>
)}

export default BlogPost

export const postQuery = graphql`
query BlogPostQuery($slug: String!) {
	allContentfulBlog(filter: {slug: {eq: $slug}}) {
    edges {
      node {
        date(formatString: "DD/MM/YYYY")
        title
        content {
          raw
        }
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
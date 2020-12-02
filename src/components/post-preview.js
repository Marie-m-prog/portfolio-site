import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Img from "gatsby-image"
import { Link } from "gatsby"

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
const PostPreview = ({ node }) => {
	// const text = documentToReactComponents(JSON.parse(node.content.raw), options)

  return (
		<Link to={`/blog/${node.slug}`}>
			<li key={node.date} className="post-item">
				
				<div>
					<h1>{node.title}</h1>
					<p>{node.date}</p>
				</div>
				<div>
					<Img alt={node.title} key={node.previewImg.fluid.src} fluid={node.previewImg.fluid}/>
				</div>
			</li>
	</Link>
)}

export default PostPreview
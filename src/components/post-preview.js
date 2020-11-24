import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Text = ({ node, children }) => {
	console.log(children)
	return <div className="align-center">{children}</div>
}

const Code = ({ children }) => {
	return <div className="code">
		<SyntaxHighlighter language="javascript" style={coy}>
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
	const text = documentToReactComponents(JSON.parse(node.content.raw), options)

  return (
	<li key={node.date}>
		<h1>{node.title}</h1>
		<p>{node.date}</p>
		{text}
	</li>
)}

export default PostPreview
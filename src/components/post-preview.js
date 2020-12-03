import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

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
import React from 'react'
import { Link } from 'react-router-dom'
import helmut from '../../../assets/img/Image_not_available.png'

function ArtItem(props) {
	let image_src = `https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`
	if (!props.image_id) {
		image_src = helmut
	}

	return (
		<article>
			<Link to={`/details/${props.id}`}>
				<img
					src={image_src}
					alt=""
				/>
				<h2>{props.title}</h2>
			</Link>
			<p>{props.artist}</p>
			<p>{props.date}</p>
		</article>
	)
}

export default ArtItem

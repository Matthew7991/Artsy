import React from 'react';
import { Link } from 'react-router-dom';

function ArtItem(props) {
	return (
		<article>
			<Link to={`/details/${props.id}`}>
				<img
					src={`https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`}
					alt=''
				/>
				<h2>{props.title}</h2>
			</Link>
			<p>{props.artist}</p>
			<p>{props.date}</p>
		</article>
	);
}

export default ArtItem;

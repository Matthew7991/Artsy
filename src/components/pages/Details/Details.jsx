import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
	const [artwork, setArtwork] = useState({})
	const [loading, setLoading] = useState(true)
	const artworkId = useParams().artId

	useEffect(() => {
		fetch(`https://api.artic.edu/api/v1/artworks/${artworkId}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('fetch failed')
				}
				return response.json()
			})
			.then((data) => {
				setArtwork(data.data)
				setLoading(false)
			})
			.catch((error) => {
				error.message
			})
	}, [])

	if (loading) {
		return <h1>loading</h1>
	}
	return (
		<section>
			<img
				src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
				alt=""
			/>
			<h2>Name: {artwork.title}</h2>
			<p>Artist :{artwork.artist_title}</p>
			<p>Displayed Years:{artwork.date_display}</p>
			<p>Origin country: {artwork.place_of_origin}</p>
		</section>
	)
}

export default Details

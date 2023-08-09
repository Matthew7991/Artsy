import React, { useEffect, useState } from 'react'
import ArtItem from '../../shared/ArtItem/ArtItem'

function Home() {
	const [arts, setArts] = useState([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [itemCount, setItemCount] = useState(12)

	useEffect(() => {
		fetch(
			`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${itemCount}`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('fetch failed')
				}
				return response.json()
			})
			.then((data) => {
				setArts(data.data)
				setLoading(false)
			})
			.catch((error) => console.error(error.message))

		return () => {
			setLoading(true)
		}
	}, [page, itemCount])

	function changePage(number) {
		setPage((prevPage) => prevPage + number)
	}

	function selectHandler(event) {
		setItemCount(event.target.value)
	}

	if (loading) {
		return <h1>loading</h1>
	}

	return (
		<div className="home">
			<h1>Willkommen bei Artsy</h1>
			<button onClick={() => changePage(-1)}>-</button>
			<button onClick={() => changePage(+1)}>+</button>
			<select
				onChange={selectHandler}
				name="item-count"
				id="item-count"
				defaultValue={itemCount}>
				<option value="12">12</option>
				<option value="24">24</option>
				<option value="36">36</option>
				<option value="48">48</option>
			</select>
			{arts.map((art) => {
				return (
					<ArtItem
						key={art.id}
						id={art.id}
						image_id={art.image_id}
						title={art.title}
						artist={art.artist_title}
						date={art.date_display}
					/>
				)
			})}
		</div>
	)
}

export default Home

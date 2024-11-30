import React from 'react'
import {useState, useEffect} from 'react'

function Header(props) {
	const [username, setUsername] = useState('')


	useEffect(() => {
		props.data ? setUsername(props.data.firstName) : setUsername('Admin');
	}, [props.data])

	const logoutUser = ()=>{
		localStorage.setItem('loggedInUser', '');
		props.changeUser('');
	}

	return (
		<>
			<div className="flex items-center justify-between mx-3 mb-3 text-white">
				<h1 className="font-semibold text-xl">Hello<br/><span className="font-bold text-3xl">{username} 👋</span></h1>
				<button onClick={logoutUser} className="bg-red-700 px-2 py-1 rounded font-semibold">Log Out</button>
			</div>
		</>
	)
}

export default Header
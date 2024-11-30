import React from 'react'
import Header from '../other/Header.jsx'
import AllTask from '../other/AllTask.jsx'
import CreateTask from '../other/CreateTask.jsx'
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthProvider.jsx'


function AdminDashboard(props) {
	const userData = useContext(AuthContext);

	return (
		<div className="px-3 py-1">
			<Header changeUser={props.changeUser} />
			<CreateTask data={userData} />
			<AllTask data={userData} />
		</div>
	)
}

export default AdminDashboard
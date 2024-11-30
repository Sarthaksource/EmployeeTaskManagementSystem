import React from 'react'
import {AuthContext} from '../../context/AuthProvider.jsx'
import {useContext} from 'react'

function TaskDetails({data}) {
	const {userData, setUserData} = useContext(AuthContext)

	const currUser = userData.employees.filter((e)=>{
		return (e.firstName==data.firstName);
	})

	return (
		<div className="flex items-center mt-3 justify-between">
			<div className="bg-red-700 w-[45%] m-2 p-5 rounded">
				<h2 className="text-3xl">{currUser[0].taskCount.new}</h2>
				<h3 className="text-xl">New Task</h3>
			</div>
			<div className="bg-blue-700 w-[45%] m-2 p-5 rounded">
				<h2 className="text-3xl">{currUser[0].taskCount.completed}</h2>
				<h3 className="text-xl">Completed Task</h3>
			</div>
			<div className="bg-green-700 w-[45%] m-2 p-5 rounded">
				<h2 className="text-3xl">{currUser[0].taskCount.active}</h2>
				<h3 className="text-xl">Accepted Task</h3>
			</div>
			<div className="bg-yellow-700 w-[45%] m-2 p-5 rounded">
				<h2 className="text-3xl">{currUser[0].taskCount.failed}</h2>
				<h3 className="text-xl">Failed Task</h3>
			</div>	
		</div>
	)
}

export default TaskDetails
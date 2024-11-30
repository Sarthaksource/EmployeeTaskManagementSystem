import React from 'react'
import Header from '../other/Header.jsx'
import TaskDetails from '../other/TaskDetails.jsx'
import TaskList from '../Task/TaskList.jsx'

function EmployeeDashboard(props) {
	return (
		<div className="text-white bg-[#1C1C1C] h-screen p-5">
			<Header changeUser={props.changeUser} data={props.data} />
			<TaskDetails data={props.data} />
			<TaskList data={props.data} />
		</div>
	)
}

export default EmployeeDashboard
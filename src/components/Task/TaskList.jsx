import React from 'react'
import AcceptTask from './AcceptTask.jsx'
import NewTask from './NewTask.jsx'
import FailedTask from './FailedTask.jsx'
import CompletedTask from './CompletedTask.jsx'
import {AuthContext} from '../../context/AuthProvider.jsx'
import {useContext} from 'react'

function TaskList({data}) {
	const userName = data.firstName;

	const {userData, setUserData} = useContext(AuthContext)

	const currUser = userData.employees.filter((e)=>{
		return (e.firstName==userName);
	})

	return (
		<div className="flex items-start overflow-x-auto h-[55%] mt-10 py-2">
		{currUser[0].tasks.map((e, id)=>{
			if(e.active)
				return (<AcceptTask data={{e, userName}} key={id} />);
			if(e.new)
				return (<NewTask data={{e, userName}} key={id} />);
			if(e.failed)
				return (<FailedTask data={{e, userName}} key={id} />);
			if(e.completed)
				return (<CompletedTask data={{e, userName}} key={id} />);
		})}
		</div>
	)
}

export default TaskList
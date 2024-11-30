import React from 'react'
import {AuthContext} from '../../context/AuthProvider.jsx'
import {useContext} from 'react'

function AcceptTask({data}) {
	const {userData, setUserData} = useContext(AuthContext)
	const {e, userName} = data;

	const markComplete = ()=>{
		const newEmployees = userData.employees;
		
		newEmployees.forEach((employee)=>{
			if(employee.firstName==userName)
			{
				employee.taskCount.completed += 1;
				employee.taskCount.active -= 1;

				employee.tasks.forEach((task)=>{
					if(task.title==e.title)
					{
						task.completed = true;
						task.active = false;
					}
				})
			}
		})

		setUserData((prev)=>({...prev, employees: newEmployees}))
	}

	const markFailed = ()=>{
		const newEmployees = userData.employees;
		
		newEmployees.forEach((employee)=>{
			if(employee.firstName==userName)
			{
				employee.taskCount.failed += 1;
				employee.taskCount.active -= 1;

				employee.tasks.forEach((task)=>{
					if(task.title==e.title)
					{
						task.failed = true;
						task.active = false;
					}
				})
			}
		})

		setUserData((prev)=>({...prev, employees: newEmployees}))
	}


	return (
		<div className="flex-shrink-0 py-5 px-5 bg-blue-500 h-full w-[315px] rounded-xl mx-2">
			<div className="flex items-center justify-between mb-5">
				<h3 className="bg-red-600 px-2 py-1 rounded text-sm font-bold">{e.category}</h3>
				<h3 className="text-base font-semibold">{e.date}</h3>
			</div>
			<h1 className="font-semibold text-2xl">{e.title}</h1>
			<p className="text-sm">{e.description}</p>
			<div className="flex justify-between mt-7">
				<button onClick={markComplete} className="bg-green-500 rounded px-2 text-sm font-semibold">Mark as complete</button>
				<button onClick={markFailed} className="bg-red-500 rounded px-2 text-sm font-semibold">Mark as failed</button>
			</div>
		</div>
	)
}

export default AcceptTask
import React from 'react'
import {AuthContext} from '../../context/AuthProvider.jsx'
import {useContext} from 'react'

function NewTask({data}) {
	const {userData, setUserData} = useContext(AuthContext)
	const {e, userName} = data;

	const markAccept = ()=>{
		const newEmployees = userData.employees;
		
		newEmployees.forEach((employee)=>{
			if(employee.firstName==userName)
			{
				employee.taskCount.active += 1;
				employee.taskCount.new -= 1;

				employee.tasks.forEach((task)=>{
					if(task.title==e.title)
					{
						task.active = true;
						task.new = false;
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
			<div className="flex justify-center mt-7">
				<button onClick={markAccept} className="bg-green-500 rounded px-2 text-sm font-semibold">Accept Task</button>
			</div>
		</div>
	)
}

export default NewTask
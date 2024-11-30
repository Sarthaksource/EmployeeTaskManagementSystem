import React from 'react'

function AllTask({data}) {
	const employees = data.userData.employees;
	return (
		<div className="flex flex-col bg-[#1c1c1c] text-white rounded mx-2 mt-3 p-4 h-52">
			{/*<h1 className="self-center m-2 font-bold text-lg">All Tasks</h1>*/}
			<div className="flex justify-evenly items-center rounded my-1 mx-6">
				<h3 className="text-center w-1/6 text-lg font-semibold">Employee Name</h3>
				<h1 className="text-center w-1/6 text-lg font-semibold">New Task</h1>
				<h1 className="text-center w-1/6 text-lg font-semibold">Active Task</h1>
				<h1 className="text-center w-1/6 text-lg font-semibold">Completed Task</h1>
				<h1 className="text-center w-1/6 text-lg font-semibold">Failed Task</h1>
			</div>
			<div className="overflow-auto">
			{employees.map((e, id)=>{
				return (
				<div key={id} className="flex items-center border-2 border-gray-400 rounded px-5 py-1.5 my-1 mx-2">
					<h3 className="text-center w-1/5">{e.firstName}</h3>
					<h1 className="text-center text-blue-600 w-1/5">{e.taskCount.new}</h1>
					<h1 className="text-center text-yellow-500 w-1/5">{e.taskCount.active}</h1>
					<h1 className="text-center text-green-500 w-1/5">{e.taskCount.completed}</h1>
					<h1 className="text-center text-red-600 w-1/5">{e.taskCount.failed}</h1>
				</div>
			)
			})}
			</div>
		</div>
	)
}

export default AllTask
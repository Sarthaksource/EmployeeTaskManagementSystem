import React from 'react'
import {useState} from 'react'
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthProvider.jsx'

function CreateTask() {
	const [taskData, setTaskData] = useState({"title": '', "date": '', "assign": '', "category": '', "description": ''});

	const {userData, setUserData} = useContext(AuthContext);

	const submitter = (e)=>{
		e.preventDefault();

		const task = {title: taskData.title, date: taskData.date, category: taskData.category, description: taskData.description, new: true, active: false, completed: false, failed: false};
		
		const data = userData.employees;

		data.forEach((e)=>{
			if(e.firstName == taskData.assign)
			{
				e.tasks.push(task);
				e.taskCount.new += 1;
			}			
		})
		setUserData((prev)=>({...prev, employees: data}));

		setTaskData({"title": '', "date": '', "assign": '', "category": '', "description": ''});
	}

	return (
		<form onSubmit={(e)=>{submitter(e)}} className="bg-[#1c1c1c] text-white px-6 py-4 rounded mx-2">
			<h2 className="font-bold text-lg">Create Task</h2>
			<div className="flex justify-between items-start gap-10">
				<div className="w-[50%]">
					<h2 className="mt-3">Task Title</h2>
					<input value={taskData.title} onChange={(e)=>{setTaskData((prev)=>({...prev, ['title']: e.target.value}))}} className="w-full bg-transparent border-2 rounded px-1 py-1/2 mt-1 border-gray-400 placeholder:text-sm outline-none" type="text" placeholder="Make a UI Design"/>
					<h3 className="mt-3">Date</h3>
					<input value={taskData.date} onChange={(e)=>{setTaskData((prev)=>({...prev, ['date']: e.target.value}))}} className="w-full bg-transparent border-2 rounded px-1 py-1/2 mt-1 border-gray-400 placeholder:text-sm outline-none" type="date" />
					<h3 className="mt-3">Assign To</h3>
					<input value={taskData.assign} onChange={(e)=>{setTaskData((prev)=>({...prev, ['assign']: e.target.value}))}} className="w-full bg-transparent border-2 rounded px-1 py-1/2 mt-1 border-gray-400 placeholder:text-sm outline-none" type="text" placeholder="Employee Name" />
					<h3 className="mt-3">Category</h3>
					<input value={taskData.category} onChange={(e)=>{setTaskData((prev)=>({...prev, ['category']: e.target.value}))}} className="w-full bg-transparent border-2 rounded px-1 py-1/2 mt-1 border-gray-400 placeholder:text-sm outline-none" type="text" placeholder="designer, developer etc" />
				</div>
				<div className="w-[50%]">
					<h2 className="mt-3">Description</h2>
					<textarea value={taskData.description} onChange={(e)=>{setTaskData((prev)=>({...prev, ['description']: e.target.value}))}} className="w-full bg-transparent border-2 rounded px-1 py-1/2 mt-1 border-gray-400 outline-none" rows="6"></textarea>
					<button className="bg-emerald-500 w-full mt-6 p-2 text-lg rounded font-semibold">Create Task</button>
				</div>
			</div>
		</form>
	)
}

export default CreateTask
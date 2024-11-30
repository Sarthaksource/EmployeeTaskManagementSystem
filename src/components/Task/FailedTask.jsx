import React from 'react'

function FailedTask({data}) {
	const {e, userName} = data;

	return (
		<div className="relative flex-shrink-0 py-5 px-5 bg-blue-500 h-full w-[315px] rounded-xl mx-2">
			<div className="flex items-center justify-between mb-5">
				<h3 className="bg-red-600 px-2 py-1 rounded text-sm font-bold">{e.category}</h3>
				<h3 className="text-base font-semibold">{e.date}</h3>
			</div>
			<h1 className="font-semibold text-2xl">{e.title}</h1>
			<p className="text-sm">{e.description}</p>
			<div className="flex mt-7 flex-col">
				<button className="bg-red-500 rounded px-2 text-sm font-semibold">Failed</button>
			</div>
		</div>
	)
}

export default FailedTask
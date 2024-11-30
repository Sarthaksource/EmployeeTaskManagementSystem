import React from 'react'
import {useState} from 'react'

function Login({loginHandler}) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitter = (e)=>{
		e.preventDefault();
		loginHandler(email, password);
		setEmail('');
		setPassword('');
	}

	return (
	<>
		<div className="bg-black flex justify-center items-center h-screen">
		    <div className="p-10">
		        <form className="flex flex-col items-center border-2 p-12 rounded border-gray-600" onSubmit={(e)=>{submitter(e)}}>
		          <h1 className="text-white font-bold text-2xl mb-12">Log In</h1>
		          <input className="bg-transparent px-2 py-1 my-3 border-2 rounded border-red-500 outline-none text-white" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />
		          <br />
		          <input className="bg-transparent px-2 py-1 my-3 border-2 rounded border-red-500 outline-none text-white" value={password} placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}} type="password" />
		          <button className="text-white mt-5 mx-2  w-full border-2 rounded bg-red-500 border-red-500">Log in</button>
		        </form>
	    	</div>
	    </div>
	</>
	)
}

export default Login
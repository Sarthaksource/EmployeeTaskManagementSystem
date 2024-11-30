import React from 'react'
import {createContext} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {getLocalStorage} from '../utils/localStorage.jsx'
import {setLocalStorage} from '../utils/localStorage.jsx'

export const AuthContext = createContext();

function AuthProvider({children}) {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		setLocalStorage();
		const {employees, admin} = getLocalStorage();
		setUserData({employees, admin});
	}, [])

	return (
		<AuthContext.Provider value={{userData, setUserData}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
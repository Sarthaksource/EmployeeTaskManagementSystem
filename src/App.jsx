import React from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import {useEffect} from 'react'
import {setLocalStorage} from './utils/localStorage.jsx'
import {getLocalStorage} from './utils/localStorage.jsx'
import {useState, useContext} from 'react'
import {AuthContext} from './context/AuthProvider.jsx'

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const {userData, setUserData} = useContext(AuthContext); 

  useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser');

      if(loggedInUser)
      {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data);
      }
  }, [])

  const loginHandler = (email, password)=>{
    if(email=='admin@example.com' && password=='123')
    {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
    }
    else if(userData)
    {
      const employeeValue = userData.employees.find((e)=>e.email==email && e.password==password);
      if(employeeValue)
      {
        setUser('employee');
        setLoggedInUserData(employeeValue);
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employeeValue}));
      }
    }
    else
    {
      alert("Invalid");
    }
  }

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ''}
      {user=='admin' ? <AdminDashboard changeUser={setUser} /> : (user=='employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
    </>
  )
}

export default App
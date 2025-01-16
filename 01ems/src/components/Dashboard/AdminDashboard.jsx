import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

function AdminDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <CreateTask/>
        <AllTask />
    </div>
  )
}

export default AdminDashboard
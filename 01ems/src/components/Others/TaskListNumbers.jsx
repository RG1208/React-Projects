import React from 'react'

function TaskListNumbers() {
  return (
    <div className='flex mt-10 justify-between gap-5 '>
        <div className='rounded-xl w-[45%] bg-red-400 text-white py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-blue-400 text-white py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-green-400 text-white py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-orange-400 text-white py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
import React from 'react'

function TaskList() {
  return (
    <div id='taskList' className='text-white flex overflow-x-auto items-center justify-start gap-5 flex-nowrap py-5 h-[55%] w-full mt-10'>
        <div className='bg-yellow-400 flex-shrink-0 h-full w-[300px] rounded-xl'>
        </div>
        <div className='bg-red-400 flex-shrink-0 h-full w-[300px] rounded-xl'>
        </div>
        <div className='bg-orange-400 flex-shrink-0 h-full w-[300px] rounded-xl'>
        </div>
        <div className='bg-blue-400 flex-shrink-0 h-full w-[300px] rounded-xl'>
        </div>
        <div className='bg-green-400 flex-shrink-0 h-full w-[300px] rounded-xl'>
        </div>
        <div className='bg-purple-400  flex-shrink-0 h-full w-[300px] rounded-xl'>
        </div>
        <div className='bg-teal-400 flex-shrink-0 h-full w-[300px] rounded-xl'>
        </div>
    </div>
  )
}

export default TaskList
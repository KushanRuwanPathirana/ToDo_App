import React from 'react'
import not_tick from '../assets/not_tick.png';
import tick from '../assets/tick.png';
import delete_icon from '../assets/delete.png';

const ToDoItems = ({text}) => {
    
  return (
    <div className='flex items-center my-3 gap-2'>
         <div className='flex flex-1 items-center cursor-pointer'>
              <img src={not_tick} className='w-7' alt="" />
              <p className="text-slate-700 ml-4 text-[17px] decoration-slate-500 ">
                {text}
            </p>
         </div>
    </div>
  )
}

export default ToDoItems
import React from 'react'
import not_tick from '../assets/not_tick.png';
import tick from '../assets/tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {

  return (
    <div className='flex items-center my-3 gap-2'>

        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick } className='w-7' alt="" />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 
                          ${isComplete ? "line-through" : ""}`}>
                {text}
            </p>
        </div>

        <img onClick={()=>{deleteTodo(id)}}className='w-3.5 cursor-pointer' src={delete_icon} alt="" />
    
    </div>
  )
}

export default TodoItems
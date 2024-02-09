import React, { useState } from 'react'
import './App.css'

function App() {
  const [status,setStatus]=useState(false)

  const[psstatus,setPsStatus]=useState(false)
  
  return (
    <div className='App'>

      <input type={psstatus?'text':'password'} className='border-2  border-cyan-300'/>
      <button className='bg-red-500
       text-green-500 py-1 px-3 rounded'
        onClick={()=>setPsStatus(!psstatus)}>
      {psstatus?'Hide':'Show'}
      </button>
      <br />
      <button onClick={()=>setStatus(!status)}>{
        (status)?'Hide':'Show'
}</button>
      {
(status)?<h1 className='bg-[red]'>Hello friends</h1>:<h1 className='bg-[green]'>Good Night</h1>
      }

    </div>
  )
}

export default App

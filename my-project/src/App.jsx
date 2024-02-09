import React, { useState } from 'react'
import './App.css'

function App() {
  const [status,setStatus]=useState(false)
  
  return (
    <div>
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

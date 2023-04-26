import React, {useState} from 'react'
import './Query_page.css'
function Query_page() {
    const[rooms,Setrooms]=useState("");
    const[rent,Setrent]=useState(null);
    const[type,Settype]=useState(null);
    const[City,Setcity]=useState("");
  return (
    <div>
         <form  className='property-search-form'>
            <input type="text"  value={rooms} placeholder="no of rooms" onChange={(e)=>Setrooms(e.target.value)}></input>
            <input type="Integer" value={rent} placeholder="rent" onChange={(e)=>Setrent(e.target.value)}></input>
            <input type="text" value={type} placeholder="type" onChange={(e)=>Settype(e.target.value)}></input>
            <input type="Integer" value={City} placeholder="City" onChange={(e)=>Setcity(e.target.value)}></input>
            <button type="submit">submit</button>
         </form>
    </div>
  )
}

export default Query_page
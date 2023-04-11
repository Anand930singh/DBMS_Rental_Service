import React, { useState } from 'react'

function Branchform() {
    const [street,setStreet]=useState('');
    const [city,setCity]=useState('');
    const [postcode,setPostcode]=useState('');
    const [contact,setContact]=useState('');

    const formHandling=async (e)=>{
        e.preventDefault();
        console.log(street,city,postcode,contact)
        const response=await fetch ('/branchForm',{
            method:"POST",
            body:JSON.stringify({
                Stret:street,
                City:city,
                Postcode:postcode,
                Contact:contact,
            }),
            headers: { "Content-type": "application/json" },
        });
        const json=response.json();
        console.log(json);
    }

  return (
    <div>
        <form onSubmit={formHandling}>
            <labels>Street</labels><br/>
            <input type='text' placeholder='Enter Street' onChange={(e)=>setStreet(e.target.value)}></input>
            <br/><br/>
            <labels>City</labels><br/>
            <input type='text' placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}></input>
            <br/><br/>
            <labels>Postcode</labels><br/>
            <input type='text' placeholder='Enter PostCode' onChange={(e)=>setPostcode(e.target.value)}></input>
            <br/><br/>
            <labels>Branch Contact</labels><br/>
            <input type='text' placeholder='Enter Contact No.' onChange={(e)=>setContact(e.target.value)}></input>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Branchform
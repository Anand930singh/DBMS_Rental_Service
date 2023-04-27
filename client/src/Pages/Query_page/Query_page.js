import React, {useState} from 'react'
import './Query_page.css'
function Query_page() {
    const[rooms,Setrooms]=useState("");
    const[rent,Setrent]=useState(null);
    const[type,Settype]=useState("");
    const[City,Setcity]=useState("");

    const [prop,setProp]= useState([]);
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(rooms,rent,type,City);
        const response = await fetch('/seePropClient', {
            method: 'POST',
            body: JSON.stringify({
                rooms,
                rent,
                type,
                City
            }),
            headers: { "Content-type": "application/json" },
        });
        const json=await response.json();
        if(json)
        {
          setProp(json);
        }
  }

  return (
    <div className='body_query'>
      <div className='properties_form'>
         <form  className='property-search-form' onSubmit={handleSubmit}>
            <input type="text"  value={rooms} placeholder="No of rooms" onChange={(e)=>Setrooms(e.target.value)}></input>
            <input type="Integer" value={rent} placeholder="Rent" onChange={(e)=>Setrent(e.target.value)}></input>
            <input type="text" value={type} placeholder="Type" onChange={(e)=>Settype(e.target.value)}></input>
            <input type="Integer" value={City} placeholder="City" onChange={(e)=>Setcity(e.target.value)}></input>
            <button type="submit">Search</button>
         </form>
         </div>
         <div className='result'>
         {prop && (
          <table>
            <thead>
              <tr>
                <th>Property ID</th>
                <th>Owner Id</th>
                <th>Property Type</th>
                <th>No_room</th>
                <th>Rent</th>
                <th>Street</th>
                <th>City</th>
                <th>Postcode</th>
                <th>Employee ID</th>
              </tr>
            </thead>
            <tbody>
              {prop.map((property) => (
                <tr key={property.id}>
                  <td>{property.Property_id}</td>
                  <td>{property.Owner_id}</td>
                  <td>{property.P_type}</td>
                  <td>{property.No_room}</td>
                  <td>{property.Rent}</td>
                  <td>{property.Street}</td>
                  <td>{property.City}</td>
                  <td>{property.Postcode}</td>
                  <td>{property.Eid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
         </div>
    </div>
  )
}

export default Query_page
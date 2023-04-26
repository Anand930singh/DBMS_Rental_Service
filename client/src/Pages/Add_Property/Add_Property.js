import React , {useState}from 'react'
 import './Add_Property.css'
function Add_Property() {
    const [PropertyCity, changePropertyCity] = useState('');
    const [PropertyStreet, changePropertyStreet] = useState('');
    const [PropertyPincode, changePropertyPincode] = useState('');
    const [PropertyType, changePropertyType] = useState('');
    const [PropertyRoom, changePropertyRoom] = useState('');
    const [PropertyRent, changePropertyRent] = useState('');
    const [message,setMessage]=useState('');

    const handleForm=async (e)=>{
        console.log(PropertyCity);
        e.preventDefault();
        const response=await fetch('/addProperty',{
            method:'POST',
            body:JSON.stringify({
                PropertyCity,
                PropertyStreet,
                PropertyPincode,
                PropertyType,
                PropertyRoom,
                PropertyRent
            }),
            headers: { "Content-type": "application/json" },
        });

        const json= await response.json();
        if(json.err==='FAILED')
        {
            setMessage(json.msg);
        }
        else{
            window.location.replace('http://localhost:3000/owneroptions')
        }
        console.log(json);

    }


  return (
    <div className='Property_Registeration'>
<<<<<<< HEAD
        <div className='blur-background'></div>
            <div className='Property-Registeration-div'>
=======
        {/* <div className='blur-background'></div> */}
            <form  id="form1" className='Property-Registeration-div' onSubmit={handleForm}>
>>>>>>> f7feb88090d5d7871dad0dacc6cd936e8f934da9
            <div className='register_details-Property'>
                <div className='register-content-Property'> Property registeration</div>
                <div className='Div-line-Property'>
                    <div className='Div-line-width-Property'></div>
                </div>
            </div>
                <div className='Property-registeration-form'>
                    <div className='Property_FirstPage' >
                    <div className='Property-content-div'>
                    <div className='Property-content-1'>
                            <input className='Property-Input' type='text' value={PropertyStreet} placeholder="Street" onChange={(e) => changePropertyStreet(e.target.value)} ></input>
                        </div>
                        <div className='Property-content-1'>

                            <input className='Property-Input' type='text' value={PropertyCity} placeholder="City" onChange={(e) => changePropertyCity(e.target.value)} ></input>
                        </div>
                    </div>
                    <div className='Property-content-div'>
                        <div className='Property-content-2'>

                            <input className='Property-Input' type='text' value={PropertyPincode} placeholder="Pincode" onChange={(e) => changePropertyPincode(e.target.value)} ></input>
                        </div>

                    </div>
                    <div className='Property-content-div'>
                    <div className='Property-content-1'>
                            <input className='Property-Input' type='text' value={PropertyType} placeholder="Type" onChange={(e) => changePropertyType(e.target.value)} ></input>
                        </div>
                        <div className='Property-content-1'>

                            <input className='Property-Input' type='text' value={PropertyRoom} placeholder="Room" onChange={(e) => changePropertyRoom(e.target.value)} ></input>
                        </div>
                    </div>
                    <div className='Property-content-div'>
                        <div className='Property-content-2'>

                            <input className='Property-Input' type='text' value={PropertyRent} placeholder="Rent" onChange={(e) => changePropertyRent(e.target.value)} ></input>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='Property-Buttons'>
                    <button className='Property-submit-button' type="submit"  form="form1" >Submit</button>
                </div>
            </form>
            </div>
    )
}

export default Add_Property
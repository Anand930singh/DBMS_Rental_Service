import React , {useState}from 'react'
 import './Add_Property.css'
function Add_Property() {
    const [PropertyCity, changePropertyCity] = useState('');
    const [PropertyStreet, changePropertyStreet] = useState('');
    const [PropertyPincode, changePropertyPincode] = useState('');
    const [PropertyType, changePropertyType] = useState('');
    const [PropertyRoom, changePropertyRoom] = useState('');
    const [PropertyRent, changePropertyRent] = useState('');
  return (
    <div className='Property_Registeration'>
        {/* <div className='blur-background'></div> */}
            <div className='Property-Registeration-div'>
            <div className='register_details-Property'>
                <div className='register-content-Property'> Property registeration</div>
                <div className='Div-line-Property'>
                    <div className='Div-line-width-Property'></div>
                </div>
            </div>
                <form className='Property-registeration-form'>
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
                </form>
                <div className='Property-Buttons'>
                    <button className='Property-submit-button' type='submit'  form="form1" >submit</button>
                </div>
            </div>
            </div>
    )
}

export default Add_Property
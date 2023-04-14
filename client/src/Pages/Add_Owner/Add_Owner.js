import React, { useEffect, useState } from 'react'
import './Add_Owner.css'

function Add_Owner() {
    const [LastNameOwner, changelnameOwner] = useState('');
    const [FirstNameOwner, changeNameOwner] = useState('');
    const [TelPhoneNumber, changeTelNumber] = useState('');
    const [OwnerCity, changeOwnerCity] = useState('');
    const [OwnerStreet, changeOwnerStreet] = useState('');
    const [OwnerPincode, changeOwnerPincode] = useState('');
    const [OwnerBranchNo, changeOwnerBranchNo] = useState('');
    const [OwnerContact, changeOwnerContact] = useState('');
    const [OwnerBusiness, changeOwnerBusiness] = useState('');
    const [OwnerEmail, changeOwnerEmail] = useState('');
    const [OwnerPersonalColor, changeOwnerPersonalColor] = useState('#a0b3b0');
    const [OwnerBusinessColor, changeOwnerBusinessColor] = useState('#13232f');
    const [Div1PosOwner, changePosDivOwner] = useState(0);
    const [OpacityOwner, changeOpecOwner] = useState(1);
    const [Opacity1Owner, changeOpec1Owner] = useState(0);
    const [Div1Pos1Owner, changePosDiv1Owner] = useState(100);
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);

    const ChangePosOwner = (e) => {
        e.preventDefault();
        changePosDivOwner(-110);
        changePosDiv1Owner(0);
        changeOwnerPersonalColor('#13232f');
        changeOwnerBusinessColor('#a0b3b0');
        changeOpecOwner(0);
        changeOpec1Owner(1);
    }
    const ChangePos1Owner = (e) => {
        e.preventDefault();
        changePosDivOwner(0);
        changePosDiv1Owner(100);
        changeOpecOwner(1);
        changeOwnerPersonalColor('#a0b3b0');
        changeOwnerBusinessColor('#13232f');
        changeOpec1Owner(0);
    }

    const handleForm = async (e) => {
        console.log(FirstNameOwner);
        e.preventDefault();
        const response = await fetch('/ownerReg', {
            method: 'POST',
            body: JSON.stringify({
                LastNameOwner,
                FirstNameOwner,
                OwnerStreet,
                OwnerCity,
                OwnerPincode,
                TelPhoneNumber,
                OwnerBranchNo,
                OwnerBusiness,
                OwnerEmail
            }),
            headers: { "Content-type": "application/json" },
        });
    }


    useEffect(() => {
        async function fetchBranches() {
            const data = await fetch('/getBranches', { method: 'POST' });
            const json = await data.json();
            console.log(json);
            if (json.status === '400') {
                setMessage('Error!')
            }

            setData(json);
        }
        fetchBranches();
    }, []);

    return (
        <div className='Owner_Registeration'>
            <div className='Owner-Registeration-div'>
                <div className='register_details'>
                    <div className='register-content-owner'> Owner registeration</div>
                    <div className='Div-line'>
                        <div className='Div-line-width'></div>
                    </div>
                    <div className='Details-type-owner'>
                        <div className='Details-type-value' style={{ backgroundColor: `${OwnerPersonalColor}`, color: `${OwnerBusinessColor}`, borderColor: `${OwnerBusinessColor}` }}>Personal</div>
                        <div className='Details-type-value' style={{ backgroundColor: `${OwnerBusinessColor}`, color: `${OwnerPersonalColor}`, borderColor: `${OwnerPersonalColor}` }}>Business</div>

                    </div>
                </div>
                <form className='Owner-registeration-form' id="ownerform" onSubmit={handleForm} >
                    <div className='Owner_FirstPage' style={{ left: `${Div1PosOwner}%` }}>
                        <div className='Owner-content-div'>
                            <div className='Owner-content-1'>
                                <input className='Owner-Input' type='text' value={FirstNameOwner} placeholder="FirstName" onChange={(e) => changeNameOwner(e.target.value)} ></input>
                            </div>
                            <div className='Owner-content-1'>

                                <input className='Owner-Input' type='text' value={LastNameOwner} placeholder="LastName" onChange={(e) => changelnameOwner(e.target.value)} ></input>
                            </div>

                        </div >
                        <div className='Owner-content-div'>
                            <div className='Owner-content-1'>
                                <input className='Owner-Input' type='text' value={OwnerStreet} placeholder="Street" onChange={(e) => changeOwnerStreet(e.target.value)} ></input>
                            </div>
                            <div className='Owner-content-1'>

                                <input className='Owner-Input' type='text' value={OwnerCity} placeholder="City" onChange={(e) => changeOwnerCity(e.target.value)} ></input>
                            </div>
                        </div>
                        <div className='Owner-content-div'>
                            <div className='Owner-content-2'>

                                <input className='Owner-Input' type='text' value={OwnerPincode} placeholder="Pincode" onChange={(e) => changeOwnerPincode(e.target.value)} ></input>
                            </div>

                        </div>
                        <div className='Owner-content-div'>
                            <div className='Owner-content-2'>

                                <input className='Owner-Input' type='text' value={TelPhoneNumber} placeholder="TelephoneNumber" onChange={(e) => changeTelNumber(e.target.value)} ></input>
                            </div>
                        </div>
                    </div>
                    <div className='Owner-SecondPage' style={{ left: `${Div1Pos1Owner}%` }}>
                        <div className='Owner-content-div'>
                            <div className='Owner-content-2'>

                                {/* <input className='Owner-Input' type='text' value={OwnerBranchNo} placeholder="Branch No" onChange={(e) => changeOwnerBranchNo(e.target.value)} ></input> */}
                                <select className='Owner-Input' value={OwnerBranchNo} placeholder="Branch No" onChange={(e) => changeOwnerBranchNo(e.target.value)}>
                                {data.map((item, index) => (
                                        <option key={index} value={item.Branch_no}>
                                            {item.Branch_no+' ('+item.Street+' '+item.City+'  '+item.Postcode+')'}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className='Owner-content-div'>
                            <div className='Owner-content-2'>

                                <input className='Owner-Input' type='number' value={OwnerContact} placeholder="Contact Number" onChange={(e) => changeOwnerContact(e.target.value)} ></input>
                            </div>
                        </div>
                        <div className='Owner-content-div'>
                            <div className='Owner-content-2'>

                                <input className='Owner-Input' type='text' value={OwnerBusiness} placeholder="Business" onChange={(e) => changeOwnerBusiness(e.target.value)} ></input>
                            </div>
                        </div>
                        <div className='Owner-content-div'>
                            <div className='Owner-content-2'>

                                <input className='Owner-Input' type='email' value={OwnerEmail} placeholder="Email" onChange={(e) => changeOwnerEmail(e.target.value)} ></input>
                            </div>


                        </div>
                    <button className='Owner-submit-button' type='submit' form="ownerform" style={{ opacity: `${Opacity1Owner}` }}>Submit</button>
                    </div>
                </form>
                <div className='Owner-Buttons'>
                    <button className='Owner-back-button' onClick={ChangePos1Owner} style={{ opacity: `${Opacity1Owner}` }}>BACK</button>
                    <button className='Owner-back-button' onClick={ChangePosOwner} style={{ opacity: `${OpacityOwner}` }}>NEXT</button>
                </div>
            </div>
        </div>
    )
};

export default Add_Owner;
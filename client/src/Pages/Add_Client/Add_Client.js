import React, { useState } from 'react'
import './Add_client.css'
function Add_Client() {
    const [count, changeCount] = useState(0);
    const [Div1PosClient, changePosDivClient] = useState(0);
    const [OpacityClient, changeOpecClient] = useState(1);
    const [Opacity1Client, changeOpec1Client] = useState(0);
    const [Opacity2Client, changeOpec2Client] = useState(0);
    const [Div1Pos1Client, changePosDiv1Client] = useState(100);
    const [Div1Pos2Client, changePosDiv2Client] = useState(200);
    const [LastNameClient, changelnameClient] = useState('');
    const [FirstNameClient, changeNameClient] = useState('');
    const [ClientEmail, changeClientEmail] = useState('');
    const [ClientContact, changeClientContact] = useState('');
    const [TypeClient, changeTypeClient] = useState('');
    const [MaxRentClient, changeMaxRentClient] = useState('');
    const [ClientTelPhoneNumber, changeClientTelNumber] = useState('');
    const [ClientPersonalColor, changeClientPersonalColor] = useState('#a0b3b0');
    const [ClientBusinessColor, changeClientBusinessColor] = useState('#13232f')
    return (
        <div className='Client_Registeration'>
            <div className='Client-Registeration-div'>
                <div className='register_details_Client'>
                    <div className='register-content-Client'> Client registeration</div>
                    <div className='Div-line-Client'>
                        <div className='Div-line-width-Client'></div>
                    </div>
                </div>
                <form className='Client-registeration-form'>
                    <div className='Client_FirstPage' style={{ left: `${Div1PosClient}%` }}>
                        <div className='Client-content-div'>
                            <div className='Client-content-1'>
                                <input className='Client-Input' type='text' value={FirstNameClient} placeholder="FirstName" onChange={(e) => changeNameClient(e.target.value)} ></input>
                            </div>
                            <div className='Client-content-1'>

                                <input className='Client-Input' type='text' value={LastNameClient} placeholder="LastName" onChange={(e) => changelnameClient(e.target.value)} ></input>
                            </div>

                        </div >
                        <div className='Client-content-div'>
                            <div className='Client-content-1'>
                                <input className='Client-Input' type='text' value={ClientEmail} placeholder="Contact No." onChange={(e) => changeClientEmail(e.target.value)} ></input>
                            </div>
                            <div className='Client-content-1'>

                                <input className='Client-Input' type='text' value={ClientContact} placeholder="Email" onChange={(e) => changeClientContact(e.target.value)} ></input>
                            </div>
                        </div >
                        <div className='Client-content-div'>
                            <div className='Client-content-2'>
                                <input className='Client-Input' type='text' value={TypeClient} placeholder="Type Of Poperty" onChange={(e) => changeTypeClient(e.target.value)} ></input>
                            </div>
                        </div>
                        <div className='Client-content-div'>
                            <div className='Client-content-2'>

                                <input className='Client-Input' type='text' value={MaxRentClient} placeholder="Max Rent" onChange={(e) => changeMaxRentClient(e.target.value)} ></input>
                            </div>


                        </div>
                    </div>
                </form>
                <button className='Client-submit-button'form="client-form">Submit</button>
            </div>
        </div>
    )
}

export default Add_Client
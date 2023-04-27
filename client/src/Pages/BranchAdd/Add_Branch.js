import React, { useState } from 'react'
import './Add_Branch.css'
function Add_Branch() {
    // const newDate = new Date()
    const [BranchNo, changeBranch] = useState('');
    const [Street, changeStreet] = useState('');
    const [City, changeCity] = useState('');
    const [PostCode1, changePostCode1] = useState('');
    // const [PostCode, changePostCode] = useState(newDate.toISOString().slice(0, 10));
    const [BranchContact, changeContact] = useState('');
    const [Mid, changeMid] = useState('');


    const handleForm = async (e) => {
        e.preventDefault();
        const response = await fetch('/addBranch', {
            method: 'POST',
            body: JSON.stringify({
                Street,
                City,
                PostCode1,
                BranchContact,
                Mid
            }),
            headers: { 'Content-type': 'application/json' },
        });
        const json2 = await response.json();
        if (json2.status === 'SUCCESS') {
            window.alert('Branch added Scuccessfully');
            window.location.replace('http://localhost:3000/adminoptions')
        }
    }


    return (
        <div className='e-login_1-branch' >
            <form className='login-form_1-branch' onSubmit={handleForm}>
                <div className='main-container_1-branch'>
                    <div className='reg-con_1-branch' id='reg-con_1' >
                        <div className="register_1-branch">  Add Branch<br /></div>
                        <div className='content-1_1-branch'>

                            <div className='sub-content-1_1-branch'>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input className='inp_1-branch-1' type='text' value={Street} placeholder="Street Name" onChange={(e) => changeStreet(e.target.value)} ></input>
                            </div>
                            <div className='sub-content-1_1-branch'>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input className='inp_1-branch-1' type='text' value={City} placeholder="City" onChange={(e) => changeCity(e.target.value)} ></input>
                            </div>

                        </div >

                        <div className='content-1_1-branch'>
                            <div className='sub-content-2_1-branch'>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input className='inp_1-branch' type='text' value={PostCode1} placeholder="Post Code" onChange={(e) => changePostCode1(e.target.value)} ></input>
                            </div>

                        </div>
                        <div className='content-1_1-branch'>
                            <div className='sub-content-2_1-branch'>
                            <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input className='inp_1-branch' type='text' value={BranchContact} placeholder="Branch Contact" onChange={(e) => changeContact(e.target.value)} ></input>
                            </div>

                        </div>
                        <div className='content-1_1-branch'>
                            <div className='sub-content-2_1-branch'>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input className='inp_1-branch' type='text' value={Mid} placeholder="Manager Id (Not Necessary *)" onChange={(e) => changeMid(e.target.value)} ></input>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='Buttons1_1-branch'>
                    <button className='submit-button_1-branch' type='submit' >SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Add_Branch
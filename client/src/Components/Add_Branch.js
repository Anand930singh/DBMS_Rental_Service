import React , {useState}from 'react'
import './Add_Branch.css'
function Add_Branch() {
    const newDate = new Date()
    const [BranchNo, changeBranch] = useState('');
    const [Street, changeStreet] = useState('');
    const [City, changeCity] = useState('');
    const [PostCode1, changePostCode1] = useState('');
    const [PostCode, changePostCode] = useState(newDate.toISOString().slice(0, 10));
    const [BranchContact, changeContact] = useState('');
    const [Mid, changeMid] = useState('');
    return (
        <div className='e-login' >
            <form className='login-form'>
                <div className='main-container'>
                <div className='reg-con' id='reg-con' >
                        <div className="register"> <div> Add Branch<br /></div></div>
                        <div className='content-1'>
                            <div className='sub-content-1'>
                                <input className='inp' type='text' value={BranchNo} placeholder="Branch Number" onChange={(e) => changeBranch(e.target.value)} ></input>
                            </div>
                            <div className='sub-content-1'>

                                <input className='inp' type='text' value={Street} placeholder="Street Name" onChange={(e) => changeStreet(e.target.value)} ></input>
                            </div>

                        </div >
                        <div className='content-1'>
                            <div className='sub-content-2'>
                                {/* <span class="material-symbols-outlined">
                                    person
                                </span> */}
                                <input className='inp' type='text' value={City} placeholder="City" onChange={(e) => changeCity(e.target.value)} ></input>
                            </div>

                        </div>
                      
                        <div className='content-1'>
                            <div className='sub-content-2'>
                                {/* <span class="material-symbols-outlined">
                                    person
                                </span> */}
                                <input className='inp' type='text' value={PostCode1} placeholder="Post Code" onChange={(e) => changePostCode1(e.target.value)} ></input>
                            </div>

                        </div>
                        <div className='content-1'>
                            <div className='sub-content-2'>
                                {/* <span class="material-symbols-outlined">
                                    person
                                </span> */}
                                <input className='inp' type='text' value={BranchContact} placeholder="Branch Contact" onChange={(e) => changeContact(e.target.value)} ></input>
                            </div>

                        </div>
                        <div className='content-1'>
                            <div className='sub-content-2'>
                                {/* <span class="material-symbols-outlined">
                                    person
                                </span> */}
                                <input className='inp' type='text' value={Mid} placeholder="Manager Id" onChange={(e) => changeMid(e.target.value)} ></input>
                            </div>

                        </div>
                        </div>
                </div>
                <div className='Buttons1'>
                    <button className='submit-button' type='submit' >SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Add_Branch
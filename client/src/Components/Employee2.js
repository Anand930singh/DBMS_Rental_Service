import React, { useState } from 'react'
import Image from './Images/id.svg'
import Image2 from './Images/hierarchy.svg'
import Image3 from './Images/date-28.svg'
import Image4 from './Images/gender.svg'

function Employee2() {
    const newDate=new Date()
    const [staffNumber, changeStaff] = useState('');
    const [LastName, changelname] = useState('');
    const [Name, changeName] = useState('');
    const [CurrDate, changeDate] = useState(newDate.toISOString().slice(0, 10));
    const [SEX, changeSex] = useState('');
    const [Position, changePos] = useState('');
    const [BranchId, changeBranch] = useState('');
    const [Manager_Date, changeManager] = useState(newDate.toISOString().slice(0, 10));
    const [Manager_Bonus, changeBonus] = useState('');
    const [Supervisior, changeSupervisior] = useState('');
  return (
    <div className='e-login' >
            <form className='login-form'>
                <div className='reg-con'>
                    <div className="register"> <div> Staff Registration <br /></div></div>
                    <div className='content-1'>
                        <div className='sub-content-1'>
                            <input className='inp' type='text' value={Name} placeholder="FirstName" onChange={(e) => changeName(e.target.value)} ></input>
                        </div>
                        <div className='sub-content-1'>

                            <input className='inp' type='text' value={LastName} placeholder="LastName" onChange={(e) => changelname(e.target.value)} ></input>
                        </div>

                    </div >
                    <div className='content-1'>
                        <div className='sub-content-2'>
                            <img src={Image}></img>
                            <input className='inp' type='text' value={staffNumber} placeholder="Staff Id" onChange={(e) => changeStaff(e.target.value)} ></input>
                        </div>

                    </div>
                    <div className='content-1'>
                        <div className='sub-content-2'>
                            <img src={Image4}></img>
                            <select className='select' placeholder="Sex" value={SEX} onChange={(e) => changeSex(e.target.value)}>
                                <option value="M" class="option-val">MALE</option>
                                <option value="F">Female</option>
                                <option value="o">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className='content-1'>
                        <div className='sub-content-2'>
                            <img src={Image3}></img>
                            <input className='inp' type='date' value={CurrDate} placeholder="DOB" onChange={(e) => changeDate(e.target.value)} ></input>
                        </div>

                    </div>
                    <div class='content-1'>
                        <div className='sub-content-2'>
                            <img src={Image2}></img>
                            <select className='select'  value={Position} onChange={(e) => changePos(e.target.value)}>
                                <option value="Assistant">Assistant</option>
                                <option value="Supervisior">Supervisior</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className='reg-con-1'>
                    <div class='reg-con1'>
                        <div className='other-detail'>
                           <div> Other Details
                            <br/></div>
                        </div>
                        <div className='content-1'>
                            <div className='sub-content-2'>
                                <input className='inp' type='text' value={BranchId} placeholder="Branch Id" onChange={(e) => changeBranch(e.target.value)} ></input>
                            </div>
                        </div>
                        <div className='content-1'>
                            <div className='sub-content-2'>
                            <input className='inp' type='date' value={Manager_Date}  onChange={(e) => changeManager(e.target.value)} />
                            </div>
                        </div>
                        <div className='content-1'>
                            <div className='sub-content-2'>
                                <input className='inp' type='text' value={Supervisior} placeholder="Supervisior Id" onChange={(e) => changeSupervisior(e.target.value)} ></input>
                            </div>
                        </div>
                        <div className='content-1'>
                            <div className='sub-content-2'>
                                <input className='inp' type='text' value={Manager_Bonus} placeholder=" Manager Bonus" onChange={(e) => changeBonus(e.target.value)} ></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='reg-con2'></div>
            </form>
        </div>
  )
}

export default Employee2
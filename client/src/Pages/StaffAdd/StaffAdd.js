import React, { useState } from 'react'
import Image from './Images/id.svg'
import Image2 from './Images/hierarchy.svg'
import Image3 from './Images/date-28.svg'
import Image4 from './Images/gender.svg'
import Back_butt from './Images/back.png'
import './StaffAdd.css'
function Employeelogin() {
    const newDate = new Date()
    const [staffNumber, changeStaff] = useState('');
    const [LastName, changelname] = useState('');
    const [Name, changeName] = useState('');
    const [dob, changeDate] = useState(newDate.toISOString().slice(0, 10));
    const [SEX, changeSex] = useState('');
    const [Position, changePos] = useState('');
    const [BranchId, changeBranch] = useState('');
    const [start_Date, changeStartDate] = useState(newDate.toISOString().slice(0, 10));
    const [salary, changeSalary] = useState('');
    const [Supervisior, changeSupervisior] = useState('');
    const [Div1Pos, changePosDiv] = useState(0);
    const [Opacity, changeOpec] = useState(1);
    const [Opacity1, changeOpec1] = useState(0);
    const [Div1Pos1, changePosDiv1] = useState(100);


    const handleForm=async(e)=>{
        e.preventDefault();
        const response=await fetch('/addStaff',{
            method:'POST',
            body:JSON.stringify({
                staffNumber,
                Name,
                LastName,
                SEX,
                dob,
                Position,
                BranchId,
                Supervisior,
                salary,
                start_Date
        }),
            headers:{'Content-type':'application/json'},
        });

    }


    const ChangePos = (e) => {
        e.preventDefault();
        changePosDiv(-110);
        changePosDiv1(0);
        changeOpec(0);
        changeOpec1(1);
    }
    const ChangePos1 = (e) => {
        e.preventDefault();
        changePosDiv(0);
        changePosDiv1(100);
        changeOpec(1);
        changeOpec1(0);
    }
    return (
        <div className='e-login' >
            <form className='login-form' onSubmit={handleForm}>
                <div className='main-container'>
                    <div className='reg-con' id='reg-con' style={{ left: `${Div1Pos}%` }}>
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
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input className='inp' type='text' value={staffNumber} placeholder="Staff Id" onChange={(e) => changeStaff(e.target.value)} ></input>
                            </div>

                        </div>
                        <div className='content-1'>
                            <div className='sub-content-2'>
                                <img src={Image4}></img>
                                <select className='select' value={SEX} onChange={(e) => changeSex(e.target.value)}>
                                    <option value="" >Select Gender</option>
                                    <option value="M" >MALE</option>
                                    <option value="F">Female</option>
                                    <option value="o">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className='content-1'>
                            <div className='sub-content-2'>
                                <span class="material-symbols-outlined">
                                    edit_calendar
                                </span>
                                <input className='inp' type='date' value={dob} placeholder="DOB" onChange={(e) => changeDate(e.target.value)} ></input>
                            </div>

                        </div>
                        <div class='content-1'>
                            <div className='sub-content-2'>
                                <span class="material-symbols-outlined">
                                    group
                                </span>
                                <select className='select' value={Position} onChange={(e) => changePos(e.target.value)}>
                                    <option value="">Select Position</option>
                                    <option value="Assistant">Assistant</option>
                                    <option value="Supervisior">Supervisior</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className='reg-con-1' id='reg-con-1' style={{ left: `${Div1Pos1}%`, opaacity: `${Opacity1}` }}>
                        <div class='reg-con1'>
                            <div className='other-detail'>
                                <div> Other Details
                                    <br /></div>
                            </div>
                            <div className='content-1'>
                                <div className='sub-content-2'>
                                    <input className='inp' type='text' value={BranchId} placeholder="Branch Id" onChange={(e) => changeBranch(e.target.value)} ></input>
                                </div>
                            </div>
                            <div className='content-1'>
                                <div className='sub-content-2'>
                                    <input className='inp' type='date' value={start_Date} onChange={(e) => changeStartDate(e.target.value)} />
                                </div>
                            </div>
                            <div className='content-1'>
                                <div className='sub-content-2'>
                                    <input className='inp' type='text' value={Supervisior} placeholder="Supervisior Id" onChange={(e) => changeSupervisior(e.target.value)} ></input>
                                </div>
                            </div>
                            <div className='content-1'>
                                <div className='sub-content-2'>
                                    <input className='inp' type='text' value={salary} placeholder="Salary" onChange={(e) => changeSalary(e.target.value)} ></input>
                                </div>
                            </div>
                            <button className='submit-button' type='submit' style={{ opacity: `${Opacity1}` }}>submit</button>
                        </div>
                    </div>
                    <div class='reg-con2'></div>
                </div>
                <div className='Buttons'>
                    <button className='back-button' onClick={ChangePos1} style={{ opacity: `${Opacity1}` }}>BACK</button>
                    
                    <button className='back-button' onClick={ChangePos} style={{ opacity: `${Opacity}` }}>NEXT</button>
                </div>
            </form>


        </div>
    )
}

export default Employeelogin
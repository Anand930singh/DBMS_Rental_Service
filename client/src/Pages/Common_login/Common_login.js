import React from 'react'
import './Common_login.css';

function Common_login() {


  return (
    <div className='body'>
        <div className='block'>
            <a href='/adminlogin'><div>Admin</div></a>
            <a href='/stafflogin'><div>Staff</div></a>
            <a href='/ownerloginoption'><div>Owner</div></a>
            <a href='/clientloginoption'><div>Client</div></a>
        </div>
    </div>
  )
}

export default Common_login
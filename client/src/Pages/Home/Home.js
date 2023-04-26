import React from 'react'
import './Home.css'
import img from './icons8-arrow-24.png'

function Home() {
  return (
    <div className='home_body'>
        <div className='home_container'>
            Welcome to Dream home. Here we provide renting services on properties for accomodation of families.
        </div>
        <div className='home_btn'><a href='/commonlogin'>Continue <img src={img}></img></a></div>
    </div>
  )
}

export default Home
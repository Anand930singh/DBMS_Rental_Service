import React from 'react'
import './Createcard.css'
function CreateCard( props) {
    console.log(typeof(props.mapping.image));
    console.log()
    const Path=URL.createObjectURL(props.mapping.image);
      return (
    <div className='Card-Structure'>
            <div className='Images'>
                <img src={Path} alt="No Images"></img>
            </div>
            <div className='Content'>{props.mapping.content}</div>
            <a className='next-link' href={props.mapping.link}>Check out</a>
        </div>
  )
}

export default CreateCard
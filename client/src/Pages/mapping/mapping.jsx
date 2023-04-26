
import React, { useState } from 'react'
import './mapping.css'
import CreateCard from './CreateCard'
import Image1 from '../../assets/mountain.jpg'
import Image2 from '../../assets/desert.jpg'
import Image3 from '../../assets/beachs.jpg'
import Image4 from '../../assets/plain.jpg'
import Image5 from '../../assets/history.jpg'
import Image6 from '../../assets/forest.jpg'

function Mapping() {
    const [Mappinglist, ChangeMappingList] = useState([
        { image: Image1, content: "Get your wish fulfilled of visiting the mountain and travel through our agents", link: "" },
        { image: Image2, content: "Get your wish fulfilled of visiting the mountain and travel through our agents", link: "" },
        { image: Image3, content: "Get your wish fulfilled of visiting the mountain and travel through our agents", link: "" },
        { image: Image4, content: "Get your wish fulfilled of vEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEisiting the mountain and travel through our agents", link: "" },
        { image: Image5, content: "Get your wish fulfilled of visiting the mountain and travel through our agents", link: "" },
        { image: Image6, content: "Get your wish fulfilled of visiting the mountain and travel through our agents", link: "" }
    ])
    return (
        <div className='Card-box'>
            {Mappinglist.map((Mappin, index) => (<CreateCard key={index} mapping={Mappin} />))}
        </div>
    )
}

export default Mapping
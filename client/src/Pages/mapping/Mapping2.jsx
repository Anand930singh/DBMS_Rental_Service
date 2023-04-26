import React ,{ useState } from 'react'
import './mapping.css'
import CreateCard from './CreateCard'
function Mapping2() {
    const [Mappinglist, ChangeMappingList] = useState([
    ]);
    const[GetContent,ChangeGetContent]=useState({image:null,content:'',link:''});
    const [SetUrl,ChangeUrl]=useState('')
    const ChangeArray=(e)=>{
        e.preventDefault();        ChangeMappingList([...Mappinglist,GetContent]);
        ChangeGetContent({
            image: '',
            content: '',
            link: '',
          });
      
        
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        ChangeGetContent({ ...GetContent, image: file });
      };
  return (
    <div>
        <form className='get-input' onSubmit={ChangeArray}>
        <div className='inp-class'>
          <input type='file' accept='image/*' className='inp' onChange={handleImageChange} />
        </div>
            <div className='inp-class'>
                <input  type="text" className='inp' value={GetContent.content} placeholder="enter image"onChange={(e) => ChangeGetContent({...GetContent,content:e.target.value})}></input>
            </div>
            <div className='inp-class'>
                <input  type="text" className='inp' value={GetContent.link} placeholder="enter image" onChange={(e) => ChangeGetContent({...GetContent,link:e.target.value})}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div className='Card-box'>
            {Mappinglist.map((Mappin, index) => (<CreateCard key={index} mapping={Mappin} />))}
        </div>
    </div>
  )
}

export default Mapping2
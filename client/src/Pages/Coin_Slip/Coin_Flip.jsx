import React ,{useState}from 'react'
import './coin_Flip.css';
function Coin_Flip() {
 const[count1,setCount]=useState(0);
 const[result,SetResult]=useState(null);
const coinspin= async()=>
{
    let count=0;
    SetResult(null);
   const intervalId = setInterval(() => {
    count++;
      setCount(Count1 => 180*(count%2))
    }, 950);
    console.log('hii');
    // const timeoutId = setTimeout(() => {
    //     clearInterval(intervalId);
    //   }, 10000);
    await new Promise((resolve) =>
    setTimeout(() => {
      clearInterval(intervalId);
      resolve(); // resolve the promise
    }, 10000)
  ).catch((error) => console.log(error));
    console.log('hii');
    let result=Math.floor(Math.random() * 2);
    let resnum=result===0?'heads':'tails'
    SetResult(resnum);

}
  return (
    <div>
        <div className='coin' style={{transform:`rotateY(${count1}deg)`}} onClick={coinspin}></div>
        <div className='display'>{result && <p>the toss is {result}</p>}</div>
    </div>
  )
}

export default Coin_Flip
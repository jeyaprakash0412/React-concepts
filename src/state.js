
import React,{useState} from 'react'



const NewState = () => {

        const [age,some]=useState(30)
        
        const addAge=()=>{
            some(age+5)
    }
    const [Show ,make]=useState(false)


    return (
        <div>
            
            {age}
            <button onClick={()=>addAge()}>Add</button><br></br>
            <button onClick={()=>addAge(age)}>Show</button>


            {Show  ?<span>React js</span> :<span>Angular js</span>}
            <button onClick={()=>make(!Show)}>Click</button> 
        </div>
    )
}

export default NewState






import React,{useState} from 'react'
import {withRouter}from 'react-router-dom'


const Form=(props)=>{
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [password,setPassword]=useState('')
    const [number,setNumber]=useState('')
    const [email,setEmail]=useState('')
    const Reset=()=>{
        setName('')
        setAge('')
        setPassword('')
        setNumber('')
        setEmail('')
    }

    const handleSubmit=(e)=>{

        e.preventDefault()
        setName('')
        setAge('')
        setPassword('')
        setNumber('')
        setEmail('')
    props.history.push('./Content')
        
    }

return (
   
<div class="container-fluid">
   <div class="row">
    <div class="col-12">
    <div class="d-flex justify-content-center" align="center">
      
    </div>
    </div>
    <div style={{marginTop:80}}>
        <form class="mt-2"  onSubmit ={(e)=>handleSubmit(e)}>
        
            <b>
            Name  :</b><br></br>
            <input value={name} onChange={(e)=>{setName(e.target.value)}}
            placeholder="Name" type="text"></input><br></br>

            <b>Age  :</b><br></br>
            <input value={age}onChange={(e)=>setAge(e.target.value)}
            placeholder="Age"type="text"></input><br></br>

            <b>Password  :</b><br></br>
            <input value={password}onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"type="password"></input><br></br>

            <b>Phone Number  :</b><br></br>
            <input value={number}onChange={(e)=>setNumber(e.target.value)}
            placeholder="123456789"type="tel"></input><br></br>
 
           <b>Mail id :</b><br></br>
           <input value={email}onChange={(e)=>setEmail(e.target.value)}
            placeholder="mail id"type="email"></input><br></br>
            
           <input  type="submit" value="submit"></input>

           <button type="reset" onClick={()=>Reset()}>Reset</button>
           
           

        </form>
        </div>    
        </div>
        </div>
        
        
    )
}
    

export default withRouter (Form)


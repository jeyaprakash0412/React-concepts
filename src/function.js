import React from 'react'

const Date = () => {
    const alertMessage=()=>{
        alert('I am Click')
        
    }
    /*const grid=[
        {Game:23,value:'kxjk',name:'unfact'},
        {Game:18,value:'hijx',name:'factable'},
        {Game:28,value:'rog',name:'condition'},
        {Game:25,value:'kxjkd',name:'unfact1'},
        {Game:14,value:'hijxs',name:'factable2'},
        {Game:22,value:'rogs',name:'condition3'}
    ]*/
    const Game1="25"
    const Game2="12"
    return (   
        <div>
           <div>     
          <button onClick={()=>alertMessage()}>Login</button>  
          </div> 
          <div>
          {Game1>23 && <span>It is true condition</span>}
          </div>
          <div>
          {Game2>24 ?<div>it is true</div>:<div>it is flase</div>}

          </div>
        </div>
        
    )
}


export default Date


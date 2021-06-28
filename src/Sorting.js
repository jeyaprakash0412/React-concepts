
import React from 'react'

const Branches = (props) => {



const grow=[
    {name:'karrupu',height:120,capable:20},
    {name:'egabaram',height:150,capable:80},
    {name:'karthi',height:180,capable:50},
    {name:'sendrayan',height:170,capable:10},
    {name:'subaiya',height:110,capable:150},
    {name:'kovinthan',height:190,capable:1}]
    
    return (
    
        
        <div>
        {grow.map((product,shop)=>

        <div key={shop}>
            <div>Name :{product.name} {product.capable}</div>
              </div>
        )
}
      <div>
          {grow.filter((item)=>item.heigth<150)
          .map((item,store)=>
           <div key={store}>
               <div>Heigth :{item.heigth}</div>
          </div>
          )}


          {grow.sort((a,b)=>b.height-a.height)
          .map((course,fill)=>
          <div key={fill}>
              <div> Acc Heigth ={course.height}</div>
              </div>

          
          
          )
          
          
          }
      </div>
        <div>
            {grow.reduce((PrevValue,CurrentValue)=>PrevValue+CurrentValue.height,80)}
        </div>
        </div>
    )
}

export default Branches

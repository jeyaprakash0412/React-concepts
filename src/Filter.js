import React from 'react'
const joke=[
    {name:"Bala",age:22,weight:80},
    {name:"PJ",age:23,weight:60},
    {name:"Santy",age:24,weight:70},
    {name:"Abdullah",age:25,weight:75},
    {name:"Parthi",age:21,weight:65}]
    


const Distance = () => {
    return (
        <div>
        

            <div>
            {joke.filter((item)=>item.age<24)
            .map((item,store) =>(
                <div key={store}>
                    <div>
                        call :{item.age}
                    
                    </div>
                     </div>
                     )
            )
            }
                     <div>
            {joke.filter((item)=>item.weight>75)
            .map((item,store) =>(
                <div key={store}>
                    <div>
                        weight :{item.weight}
                    
                    
                     </div>
                    
            </div>
            )
            )
            }
                
            
            </div>
        </div>
            
      
      </div>
    
    
    )
}

export default Distance

import React from 'react'
import Buy from './Child'

const array_of_object=[
    {key:1,value:'g',name:'order'},
    {key:2,value:'h',name:'juck'},
    {key:3,value:'i',name:'john'}
]
const variable_name='Prakash'

const List = () => {
        return (
        <div>
            List Page : {variable_name}<br></br> 
            {array_of_object.map((item,store)=>
            (<div key={store}>
                <div>Name:{item.key}</div><br></br>
                <div>Value:{item.value}</div><br></br>
                <div>Key:{item.name}</div><br></br>


                <Buy slow={variable_name}/>

            </div> 
                
                )
            
             ) }
            
        </div>
    )
}

export default List



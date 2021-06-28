import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Axios = () => {

      const [data,setData]=useState([])

      useEffect(()=>{
          axios.get("https://jsonplaceholder.typicode.com/todos")
          .then((item)=>
          {
          console.log(item)
          console.log(item.data)
          console.log(item.status);
           setData (item.data)
          }
          )
          .catch((error)=>{console.log(error)})

      },[])
    return (
        <div>
             {data.map((item,store)=>(
                 <div key={store}>
                     <div>{store}{item.title}</div>
                     </div>
             ))}
            
        </div>
    )
}

export default Axios

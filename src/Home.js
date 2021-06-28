import Title from './Title'
import Lefttitle from './Lefttitle'
import First from './First'
import './nav.css'
import NewState from './state'
import Axax from './Axios'


import{
Link
} from "react-router-dom";


const home = () => {
    return (
        <div>
      <Lefttitle/> <br></br>
      <div className="nav">
       
    <ul>
      <li><Link to="/Google"style={{textDecoration: 'none',color:'white'}}>Home</Link></li>

      <li><Link to="/Fast"style={{textDecoration: 'none',color:'white' }}>Company</Link></li>
      
      <li><Link to="/Details"style={{textDecoration: 'none',color:'white'}}>Details</Link></li>
      <li><Link to="/Review"style={{textDecoration: 'none',color:'white'}}>Reviews</Link></li>
      <li><Link to="/Child"style={{textDecoration: 'none',color:'white'}}>Contact</Link></li>
      <li><Link to="/Filter"style={{textDecoration: 'none',color:'white'}}>Service</Link></li>
      <li><Link to="/Sorting"style={{textDecoration: 'none',color:'white'}}>Branches</Link></li>
      </ul>
      </div>
      
      
      <Title/>

      <hr color="blue"></hr>
      <NewState/>
     <strong><h1 style={{textTransform:'uppercase',fontFamily:"Helvetica Neue",color:"blue"}}>Our new Project Updates</h1></strong>
     <p style={{fontFamily:"Lucida Grande",textTransform:'capitalize',fontSize:'25px',color:'red'}}> we can learn and develope the skills such as HTML,CSS,JavaScript,React,Bootstrap so this are very <br></br>
      important for frontend Develeopers.How can we Will Establish our own technical Knowledges. </p>
      
      <First/>
      <Axax/>
      
     
</div>

);
}

export default home


import {Navbar,InputGroup,FormControl,Button} from 'react-bootstrap';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiBookmark } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'
function Heading() {

    return(
        
        
        <Navbar bg="light">
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="293.26px"
        height="60px"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <InputGroup className="mb-1 w-25">
    <FormControl
      placeholder="Search..."
      
    />
    
    </InputGroup>
    <div className="dropdown">
  <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Explore
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
<div className="dropdown">
  <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Hobbies
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
    <HiBookmark size={50} style={{
        position:'absolute',
        right:'450px',
    }}/>
    <IoIosNotifications size={50} style={{
        position:'absolute',
        right:'380px'
    }}/>
    <FaShoppingCart size={50} style={{
        position:'absolute',
        right:'310px'
    }}/>

    <Button className='SignIn'>Sign In</Button> 

  </Navbar>
  
        
        
        
    )
}
export default Heading;
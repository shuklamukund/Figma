import { FaFacebook ,FaTwitter,FaInstagram,FaPinterest,FaGooglePlusG,FaTelegram,FaYoutube} from "react-icons/fa";
import {InputGroup,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgMail } from "react-icons/cg";
import './link.css';
function Link(){
    return(
       
            <div className="main" style={{ display:'flex',
            margin:'auto',
            width:'50%',
            marginTop:'40px'}}>
                <div className="main2" style={{display:'flex',
    width:'60%',
    justifyContent:'space-evenly',
    }}>
                    <div>
                        <p style={{fontWeight:'bold'}}>Hobbycue</p>
                        <div style={{cursor:'pointer'}}>
                            <p>About us</p>
                            <p>Our services</p>
                            <p>Work With us</p>
                            <p>FAQ</p>
                            <p>Contact us</p>
                        </div>

                    </div>
                    <div>
                    <p style={{fontWeight:'bold'}}>How Do I</p>
                        <div style={{cursor:'pointer'}}>
                            <p>Sign Up</p>
                            <p>Add a Listing</p>
                            <p>claim Listing</p>
                            <p>Post a Query</p>
                            <p>Add a Blog Post</p>
                            <p>Other Queries</p>
                        </div>

                    </div>
                    <div>
                    <p style={{fontWeight:'bold'}}>Quick Links</p>
                        <div style={{cursor:'pointer'}}>
                            <p>Listings</p>
                            <p>Blog Posts</p>
                            <p>Shop/Store</p>
                            <p>Community</p>
                            
                        </div>

                    </div>

                </div>
                <div style={{display:'grid'}}>
                    <p style={{fontWeight:'bold'}}>Social Media</p>
                    <div style={{display:'flex',justifyContent:'space-between',cursor:'pointer'}}>
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaPinterest/>
                        <FaGooglePlusG/>
                        <FaYoutube/>
                        <FaTelegram/>
                        <CgMail/>
                   
                    </div>

                
                    <div>
                        <p style={{fontWeight:'bold'}}>Invite Friends</p>
                        <InputGroup style={{justifyContent:'center'}} >
                            <FormControl
                                placeholder="Email Id"
                                style={{height:'25px',marginTop:'15px'}}
                                
                            />
                            
                                <InputGroup.Text id="basic-addon2" style={{height:'25px',cursor:'pointer'}}>Invite</InputGroup.Text>
                            
                        </InputGroup>
                    </div>

                </div>
            </div>
        

    )
}
export default Link;
import Joinin from '../../Joinin';
import Signin from '../../Signin';
import img1 from '../../images/main-img1.png';
import img2 from '../../images/main-img2.png';
import './mainSection.css';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function MainSection(){

    let content2='';
    let content=<div style={{display:'grid'}}>

    <button className='google'><span><FaGoogle/></span>Continue with Google</button>
    
    <button className='facebook'><span><FaFacebook/></span>Continue with Facebook</button>

    <div style={{
        display:'flex'
    }}>
        <div style={{
         height: '1px',
         width: '135px',
         margin:'50px',
         backgroundColor: 'black',

    }}></div>
    <p style={{
        fontWeight:'bold',
        margin:'33px',
    }}>or connect with</p>
    <div style={{
         height: '1px',
         width: '135px',
         margin:'50px',
         backgroundColor: 'black',
    }}></div>

    </div>
    <input type='text' placeholder='Email' style={{
        borderRadius: '5px',
        width: '80%',
        margin: '10px',
        padding:'10px',
        
    }}/>
    <input type='password' placeholder='Password' style={{
        borderRadius: '5px',
        width: '80%',
        margin: '10px',
        padding:'10px',
        
    }}/>
    <div style={{
        display:'flex',
        justifyContent:'space-between',
        width:'80%'
    }}>
    <label style={{
        marginTop:'15px'
    }}>
        <input type="checkbox" />
        <span>Remember me</span>
    </label>

    <p><FaLock/>,Forgot Passowrd</p>


    </div>
    <button style={{
        borderRadius: '5px',
        width: '80%',
        margin: '10px',
        fontWeight: 'bold',
        padding:'5px'
    }
    }>continue</button>

    </div>
    const handleSignin=()=>{
         content=<Signin/>

    }
    const handleJoinin=()=>{
         content2=<Joinin/>
         content='';
    }

    return(

        <div className='main' style={{display:'flex'}}>
            <div className='left'>
                <h1>Explore Your Hobby or Passion</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br/>
                <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div>
                    <img src={img1}>
                    
                    </img>
                    <img src={img2}></img>
                </div>
            </div>
            <div className='right'>
                <div className='btn'>
                <button className='signin' onClick={handleSignin()}>Sign In</button>
                <button className='joinin' onClick={handleJoinin()}>Join in</button>
                </div>
                
                {content}
                {content2}
                
            </div>
        </div>



    )
}
export default MainSection;
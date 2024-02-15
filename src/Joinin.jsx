import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Joinin(){
    return(

        <div style={{display:'grid'}}>

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
       <p style={{margin:'10px',display:'flex'}}>By continuing,you agree to our <p style={{color:'#6D747A',cursor:'pointer'}}>Terms of Service</p>and<p style={{color:'#6D747A',cursor:'pointer'}}>Privacy Policy</p></p>
        <button style={{
            borderRadius: '5px',
            width: '80%',
            margin: '10px',
            fontWeight: 'bold',
            padding:'5px'
        }
        }>continue</button>

        </div>

    )
}
export default Joinin;
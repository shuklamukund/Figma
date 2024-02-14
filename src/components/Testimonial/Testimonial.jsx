import { RiDoubleQuotesL } from "react-icons/ri";
import ReactAudioPlayer from 'react-audio-player';
import photo from '../../images/audio-photo.png';
function Testimonial(){
    return(

        <div style={{margin:'auto',width:'50%',marginTop:'40px',backgroundColor:'#F7F5F9',display:'grid'
        
        }}>

            <p><RiDoubleQuotesL/><span style={{fontWeight:'bold'}}>Testimonials</span></p>
            <p style={{marginTop:'30px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

            
        <div style={{display:'flex'}}>

        <ReactAudioPlayer

        src="https://www.pagalworld.com.se/files/download/type/320/id/66697"
        controls
        style={{width:'60%'}}
        />





        <img src={photo} style={{borderRadius:'100px',height:'100px',width:'100px'}}/>


        <div style={{margin:'10px'}}>
        <p style={{color:' #8064A2'}}>shubha Nagarajan</p>
        <p style={{color:'#0096C8'}}>Classical Dancer</p>

        </div>




        </div>
            
               

           


            </div>

            
       

    )
}
export default Testimonial;
import { IoIosAddCircle } from "react-icons/io";
function OwnItem(){
    return(

        <div style={{margin:'auto',width:'50%',marginTop:'40px'}}>
            <p ><IoIosAddCircle/><span style={{fontWeight:'bold'}}>Add your own</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button style={{borderRadius:'5px',backgroundColor:'white'}}>Add new</button>
        </div>

    )
}
export default OwnItem;
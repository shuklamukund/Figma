import images from '../../../images/images.png'
function Content(){
    return(

        <div style={{margin:'auto',width:'50%',marginTop:'40px'}}>
            <div>
                <h3>Your Hobby,Your Community...</h3>
                <button style={{backgroundColor:'#8064A2',borderRadius:'5px',color:'white',marginTop:'10px'}}>Get Started</button>
            </div>
            <div style={{width:'1600px',height:'302px',marginTop:'40px'}}>
                <img src={images}/>
            </div>
        </div>


    )
}
export default Content;
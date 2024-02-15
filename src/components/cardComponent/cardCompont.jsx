import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import './cardComponent.css';
function CardComponent(){
    return(

        <div className='main' style={{justifyContent:'center',alignItems:'center'}}>

            <div className='main1' >

            <Card className='People' style={{ width: '30rem' ,margin:'20px'}}>
  <Card.Body>
    <Card.Title><IoIosPeople/><span style={{margin:'10px'}}>People</span></Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button style={{borderRadius:'5px',backgroundColor:'white'}}>Connect</button>
  </Card.Body>
</Card>

<Card className='Place' style={{ width: '30rem' ,margin:'20px'}}>
  <Card.Body>
    <Card.Title><MdOutlinePlace/><span style={{margin:'10px'}}>Place</span></Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button style={{borderRadius:'5px',backgroundColor:'white'}}>Meet Up</button>
  </Card.Body>
</Card>
 

            </div>

            <div className='main2' >

            <Card className='Product' style={{ width: '30rem' ,margin:'20px'}}>
  <Card.Body>
    <Card.Title><MdOutlineProductionQuantityLimits/><span style={{margin:'10px'}}>Product</span></Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button style={{borderRadius:'5px',backgroundColor:'white'}}>Get it</button>
  </Card.Body>
</Card>

<Card className='Program' style={{ width: '30rem' ,margin:'20px'}}>
  <Card.Body>
    <Card.Title><SlCalender/><span style={{margin:'10px'}}>Program</span></Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button style={{borderRadius:'5px',backgroundColor:'white'}}>Attend</button>
  </Card.Body>
</Card>


            </div>








        </div>

        

    )
}
export default CardComponent;
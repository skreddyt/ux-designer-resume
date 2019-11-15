import React,{Component} from 'react';
import './Cardcomponent.css';
import { Row, Col,Container } from 'reactstrap';
import sumath from '../sumath.JPG'
import Img from 'react-image';
import Summary from '../Summay/Summary';
import Cot from '../Cot/Cot'
import Yeti from '../Yeti/Yeti';
import Deem from '../Deem/Deem';
import Cigna from '../Cigna/Cigna';
import Usaa from '../Usaa/Usaa';
import Dte from '../Dte/Dte';
import Garden from '../Garden/Garden';
import Gordon from '../Gordon/Gordon';
import William from '../William/William';
import Education from '../Education/Education';
import Username from '../Username/Username';
import Technicalskills from '../Technicalskills/Technicalskills';

class Cardcomponent extends Component {

  
    render () {
      
    return (
     
       
       <Container className ="containerborder">

       
        <Row className="row">
        <Col xs="3" className="rightborder">
       <div>
       <Img src={sumath} className="Image"alt="Avatar" />
       <Username />
       <Education />
       <Technicalskills />
        
        </div>
        </Col>
        <Col xs="9">
        <Summary /> 
        </Col>
        <Col xs="12">
        <Cot /> 
        <Yeti /> <Cigna /> <Usaa /> <Dte /> <Garden /> <William /> <Gordon /><Deem />
        
       
        </Col>
      </Row>
     
      </Container>
     
    )
    }
    
  }


export default Cardcomponent;
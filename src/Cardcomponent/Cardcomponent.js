import React,{Component} from 'react';
import './Cardcomponent.css';
import { Row, Col,Container } from 'reactstrap';
import sumath from '../sumath.JPG'
import Img from 'react-image';
import Summary from '../Summay/Summary';
import Cot from '../Cot/Cot'
import Yeti from '../Yeti/Yeti';

import Cigna from '../Cigna/Cigna';
import Usaa from '../Usaa/Usaa';
import Sriharsha from '../Sriharsha/Sriharsha';

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
       
        
        </div>
        </Col>
        <Col xs="9">
        <Summary /> 
        <Technicalskills />
        </Col>
        <Col xs="12">
        <Cot /> 
        <Yeti /> <Cigna /> <Usaa /> <Sriharsha />
        
       
        </Col>
      </Row>
     
      </Container>
     
    )
    }
    
  }


export default Cardcomponent;
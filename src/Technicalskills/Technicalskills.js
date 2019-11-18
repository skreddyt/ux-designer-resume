import React from 'react';
import './Technicalskills.css';
import {Table} from 'reactstrap';
const Technicalskills = () => {
    return (

     
        <div className="usaa">
         <div className="headerstyle">
           Technical skills 

        </div>
        <Table striped bordered hover>
  
  <tbody>
    
    <tr>
      
      <td >Web Technologies</td>
      <td colSpan="2">HTML5, CSS, Java script, TypeScript, JSON, Ajax, JQUERY</td>
    </tr>
    <tr>
     
      <td >Framworks & JavaScript libraries</td>
      <td colSpan="2">React.js Angular.js, Node.js, bootstrap</td>
    </tr>
    <tr>
      
      <td >Operating systems</td>
      <td colSpan="2">Windows IOS Linux/Unix</td>
    </tr>
    <tr>
     
      <td >Tools</td>
      <td colSpan="2">VSCode,Invision,Sketchup, Photoshop, Adobe and Illustrator</td>
    </tr>
  </tbody>
</Table>
           </div>  
        
    )}

export default Technicalskills;


import React from 'react';
import './PdfContainer.css';
import s from '../s.png';
import Img from 'react-image';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';


export default (props) => {
  
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  const sravan=()=> window.open("https://update-portfolio.herokuapp.com/portfolio.html");
  

  
  return (
    <section className="pdf-container">
      <section className="pdf-toolbar">
      <Img src={s} alt="Avatar" />
        <button onClick={createPdf}>Resume Download</button>
        <button  onClick={sravan}>Portfolio</button>
        
        <button>Website</button>
        <UncontrolledButtonDropdown>
      <DropdownToggle caret> Sample mockup </DropdownToggle>
      <DropdownMenu>
      <DropdownItem href="https://governor-website.invisionapp.com/overview/DMV-cjzokhwe211t1018r4deje5ut/screens?v=wagw9IU8eniHzoMlTKfoVg%3D%3D&linkshare=urlcopied">one</DropdownItem>
      <DropdownItem href="https://governor-website.invisionapp.com/overview/Section-106-ck0mnyxwy01fn01c2ni7dke0n/screens?v=wagw9IU8eniHzoMlTKfoVg%3D%3D&linkshare=urlcopied">Second</DropdownItem>
      <DropdownItem href="https://governor-website.invisionapp.com/overview/employee-ck1l7ynrs0ijr016cekgmnj1q/screens?v=wagw9IU8eniHzoMlTKfoVg%3D%3D&linkshare=urlcopied">Third</DropdownItem>
      </DropdownMenu>
      </UncontrolledButtonDropdown>
      </section>
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
  )
  }

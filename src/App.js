import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Cardcomponent from './Cardcomponent/Cardcomponent';
import PdfContainer from './PdfContainer/PdfContainer';
import Doc from './DocService/DocService';

class App extends Component {
  //sravan=()=> window.open("https://www.google.com");
  createPdf = (html) => Doc.createPdf(html);

  render() {
 
    return (
      <React.Fragment>
        
        <PdfContainer createPdf={this.createPdf} >
          <React.Fragment>
            <section >
            <Cardcomponent />
            </section>
          </React.Fragment>
        </PdfContainer>
      </React.Fragment>
    );
  }
}


  
  
export default App;

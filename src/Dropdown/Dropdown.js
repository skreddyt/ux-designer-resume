import React, {Component} from 'react';
class Dropdown extends Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{color:"white",width:"150px",marginTop:"8px",cursor: "pointer",marginLeft:"5px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Sample Mockup </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#Create Page">Create Page</a></li>
         <li><a href="https://governor-website.invisionapp.com/overview/DMV-cjzokhwe211t1018r4deje5ut/screens?v=wagw9IU8eniHzoMlTKfoVg%3D%3D&linkshare=urlcopied">Manage Pages</a></li>
         <li><a href="#Create Ads">Create Ads</a></li>
         
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}
export default Dropdown;
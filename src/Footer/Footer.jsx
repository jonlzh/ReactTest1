import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props){
      super(props);
      this.message1 = "footer msg"
    //   this.user = props.user;
    //   this.message = props.message;
  }

  render(props){
      return(
        //<p>User: {this.user} Message: {this.message}</p>
        <p>Message: {this.message1}</p>
      )
  }
}

export default Footer;
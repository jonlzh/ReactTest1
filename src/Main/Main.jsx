import React from 'react';
import './Main.css';
import PropTypes from 'prop-types';

class Main extends React.Component {
  constructor(props){
      super(props);
      this.message1 = "static msg"
      this.user = props.user;
      this.message = props.message;
  }

  render(props){
      return(
        //<p>User: {this.user} Message: {this.message}</p>
        <p>Message: {this.message1}</p>
      )
  }
}
{/* 
Main.propTypes = {
    user: PropTypes.string,
    message: propTypes.string,
}
*/}
export default Main;
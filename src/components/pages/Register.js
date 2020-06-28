import React, { Component } from 'react'
import '@coreui/icons/css/coreui-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../scss/style.css';

import UsersForm from '../form/UsersForm';
import axios from 'axios';


//  class Register extends Component {
//    result = (values) => {
//      console.log('results is', values);
//    }
class Register extends Component {
  result = (values) => {
    console.log('results is', values);  
        axios.post('https://riserafrica.georgekprojects.tk/api/phaseOne', this.result)
         .then(response => {
           console.log(response)
         })
         .catch(error => {
           console.log(error)
         })
  }

  
  render() {
    return (
      <UsersForm onSubmit={this.result}/>
    );
  }
}

export default Register

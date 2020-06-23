import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      
    };
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state);   
    axios.post('https://riserafrica.georgekprojects.tk/api/phaseOne', this.state)
     .then(response => {
       console.log(response)
     })
     .catch(error => {
       console.log(error)
     })
  }
  render() {
    const { userId } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>

        <input type="text" name="userId" value={userId} onchange={this.changeHandler} />
        <button type="submit">Submit</button>
        </form>
        
      </div>
    );
  }
}

export default PostForm;

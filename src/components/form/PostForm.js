// import React, { Component } from 'react';
// import axios from 'axios';

// export class PostForm extends Component {
//   state = {
//       phoneNumber: '',
//       email: '',
//       nationalId: '',
//       name: '',
//       photo: '',
//       projectName: '',
//       type_of_projects_id: '',
//       projectDemographicId: '',
//       typeOfAssistanceRequiredId: '',
//       userId: ''
      
//     };
  

//     handleChange = (e) => {
//     this.setState({[e.target.name]: e.target.value })
//   }

//   submitHandler = e =>{
//     e.preventDefault()
//     console.log(this.state);   
//     axios.post('https://riserafrica.georgekprojects.tk/api/phaseOne', this.state)
//      .then(response => {
//        console.log(response)
//      })
//      .catch(error => {
//        console.log(error)
//      })
//   }
//   render() {
//     const {  phoneNumber,email,nationalId,name, photo , projectName, type_of_projects_id,projectDemographicId,typeOfAssistanceRequiredId} = this.state;
//     const values ={ phoneNumber,email,nationalId,name, photo , projectName, type_of_projects_id,projectDemographicId,typeOfAssistanceRequiredId};
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>

//         <input type="text" name="userId" value={userId} onchange={this.changeHandler} />
//         <button type="submit">Submit</button>
//         </form>
        
//       </div>
//     );
//   }
// }

// export default PostForm;

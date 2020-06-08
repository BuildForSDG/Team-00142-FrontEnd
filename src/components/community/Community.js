import React, { Component } from 'react';
import axios from "axios";
import M from 'materialize-css/dist/js/materialize.min.js';

export default class Community extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  // componentDidMount() {
  //   fetch('https://riserafrica.georgekprojects.tk/api/typeOfProjects/2/projectDetail')
  //   .then(response =>{
  //       return response.json();
  //   })
  //   .then(products=>{
  //       this.setState({products});
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //     });
  // }

  async componentDidMount() {
    axios
    .get('https://riserafrica.georgekprojects.tk/api/typeOfProjects/2/projectDetail')
      .then((res) => {
        this.setState({ projects: res.data });
      })
      console.log(res.data)
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let projectList = this.state.projects.map((item) => {
      return (
        <div key={item.id}>
          <h1 className="center">Community Based Projects</h1>
          <div className="row">
            <div className="col s3 m4">
              <span className="card-title"><h4>{item.projectName}</h4>by Riser Africa</span>
              <div className="card">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img>
                </div>
                <div className="card-content">
                  <p className="truncate">{item.typeOfProject}</p>
                </div>
                <div className="card-content">
                  <p className="truncate">{item.typeOfAssistanceRequired}</p>
                </div>
                <div className="card-action">
                  <a href="#" className="blue-text">READ</a>
                  <button className="btn waves-effect waves-light blue-grey right">
                    <i className="material-icons ">share</i>
                  </button>
                  <button className="btn brown">
                    <i className="material-icons ">favorite</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
         <div >{projectList}</div>
      </div>
    )
  }

}



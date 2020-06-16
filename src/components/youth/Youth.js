import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
// import M from 'materialize-css/dist/js/materialize.min.js';

class Group extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  async componentDidMount() {
    axios
    .get('https://riserafrica.georgekprojects.tk/api/typeOfProjects/3/projectDetail')
      .then((res) => {
        this.setState({ projects: res.data });
      })
      // console.log(res.data)
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let projectList = this.state.projects.map((item) => {
      return (
        <div className="cont container-fluid" key={item.id}>        
          <div className="card center">
            <div className="col s3 m4">
              <span className="card-title"><h4>{item.projectName}</h4>by Riser Africa</span>
              <div className="card center">
                <div className="card-image">
                </div>
                <div className="card-content">
                  <h5 className="truncate">Assistance: {item.typeOfAssistanceRequired}</h5>
                  <p className="truncate">Type: {item.typeOfProject}</p>
                  <sup>Demographic - {item.projectDemographic}</sup>
                  <br/>
                  <sup>{item.projectProposer}</sup>
                  <br/><hr/><br/>
                  <i>{item.projectDetails}</i>
                </div>
                <div className="card-content">
                </div>
                <div className="card-action">
                <Link to="/individual" href="#" className="blue-text">READ</Link>
                  {/* <a href="#" className="blue-text">READ</a> */}
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
      <div className="row">
        <h3 className = "heading">Youth Based Projects</h3>
         <div className="col-md-3">{projectList}</div>
      </div>
    )
  }

}

export default Group


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

  componentDidMount() {
    this.getGroupProjects();
  }

  async getGroupProjects () {
    axios
    .get('https://riserafrica.georgekprojects.tk/api/typeOfProjects/2/projectDetail')
      .then((res) => {
        this.setState({ projects: res.data });
      })
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
                  {/* <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img> */}
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
        <h3 className = "heading">Group Based Projects</h3>
         <div className="col-md-3">{projectList}</div>
      </div>
    )
  }

}

export default Group


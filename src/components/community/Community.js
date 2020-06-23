import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
// import M from 'materialize-css/dist/js/materialize.min.js';

export default class Community extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoading: true,
    };
  }

   componentDidMount() {
    // axios
    // .get('https://riserafrica.georgekprojects.tk/api/typeOfProjects/1/projectDetail')
    //   .then((res) => {
    //     this.setState({ projects: res.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    this._isMount = true;
    this.getCommunityProjects();
  }

  async getCommunityProjects() {
    axios
    .get('https://riserafrica.georgekprojects.tk/api/typeOfProjects/1/projectDetail')
      .then((res) => {
        this.setState({ projects: res.data, isLoading: false });
      }) 
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnMount(){
    this._isMount = false;
  }

  // async getIndividualProject(id) {

  //   this.getIndividualProject && this.getIndividualProject(id);
  //   axios
  //   .get('https://riserafrica.georgekprojects.tk/api/typeOfProjects/1/projectDetail/${id}')
  //   .then(res => {
  //     this.setState({projects: res.data});
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //   alert('function test')
    
  // }

  render() {
    let projectList = this.state.projects.map((item) => {

      return (
        <div className="cont container-fluid" key={item.id}>        
          <div className="card">
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

                <Link to={`/individualCommunity/${item.id}`} className="btn btn-info">DETAILS</Link>
                &nbsp;
                  <button className="btn waves-effect waves-light blue-grey right">
                    <i className="material-icons">share</i>
                  </button>
                  <button className="btn brown">
                    <i className="material-icons" >favorite</i>
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
        <h3 className = "heading">Community Based Projects</h3>
         <div className="col-md-3">{this.state.isLoading ? <div className="loader">Loading... </div> : projectList}</div>
      </div>
    )
  }

}



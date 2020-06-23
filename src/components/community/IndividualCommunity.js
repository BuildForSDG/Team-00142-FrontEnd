import React, { Component } from 'react';
import axios from "axios";

// const Individual = () => {
  
class IndividualCommunity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    axios
      .get(`https://riserafrica.georgekprojects.tk/api/typeOfProjects/1/projectDetail/${match.params.id}`)
      .then((res) => {
        this.setState({ project: res.data.data, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // return (
    //   <div className="container-fluid">
    //     <h3>{this.state.isLoading ? <p className="loader">Loading...</p> : this.state.project.projectName}</h3>
    //   </div>
    // );
  return (
    <div className="cont container-fluid center" key={this.state.project.id}>        
          <div className="card">
            <div className="col s3 m4">
              <span className="card-title"><h4>{this.state.isLoading ? <p className="loader">Loading...</p> : this.state.project.projectName}</h4>by Riser Africa</span>
              <div className="card center">
                <div className="card-image">
                {/* <img src="https://assets.unenvironment.org/s3fs-public/styles/article_billboard_image/public/2018-12/undersown_surpress_weeds.jpg?itok=7aMv1aWJ" height="350"></img> */}
                </div>
                <div className="card-content">
                  <h5 className="truncate">Assistance: {this.state.project.typeOfAssistanceRequired}</h5>
                  <p className="truncate">Type: {this.state.project.typeOfProject}</p>
                  <sup>Demographic - {this.state.project.projectDemographic}</sup>
                  <br/>
                  <sup>{this.state.project.projectProposer}</sup>
                  <br/><hr/><br/>
                  <i>{this.state.project.projectDetails}</i>
                </div>
                <div className="card-content">
                </div>
                <div className="card-action">
                  <button className="btn brown">
                    <i className="material-icons" >favorite</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )};
}



export default IndividualCommunity

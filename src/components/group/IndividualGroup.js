import React, { Component } from 'react';
import axios from "axios";
  
class IndividualGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios
      .get(`https://riserafrica.georgekprojects.tk/api/typeOfProjects/2/projectDetail/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ project: res.data.data, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
  return (
    <div className="cont container-fluid center" key={this.state.project.id}>        
          <div className="card">
            {/* <div className="col s3 m4"> */}             
            <span className="card-title">
              <h4 className="Ptitle">{this.state.isLoading ? <p className="loader">Loading...</p> : this.state.project.projectName}
              </h4>by Riser Africa              
              </span>
              <div className="row card">
              <div className="col m2">
                <img src={"https://riserafrica.georgekprojects.tk"+this.state.project.projectProposerImage} height="160"/><sup>{this.state.project.projectProposer}</sup>
                </div>
              <div className="col m10">
              <div className="center">
                <div className="card-image">
                {/* <img src={"https://riserafrica.georgekprojects.tk"+this.state.locationOfPicture}/> */}
                {/* <img src="https://assets.unenvironment.org/s3fs-public/styles/article_billboard_image/public/2018-12/undersown_surpress_weeds.jpg?itok=7aMv1aWJ" height="350"></img> */}
                </div>
                <div className="card-content">
                  <p className="truncate">Assistance: {this.state.project.typeOfAssistanceRequired}</p>
                  <p className="truncate">Type: {this.state.project.typeOfProject}</p>
                  <sup>Demographic - {this.state.project.projectDemographic}</sup>
                  <br/>
                  <h5><b>Project Description</b></h5>
                  <p>
                    {this.state.project.projectDetails}
                  </p>
                  <br/>
                  <br/><br/>                  
                </div>
                <div className="card-content">
                </div>                
                </div>
              </div>
              <i>Project Images Here...</i>
                  <img src={"https://riserafrica.georgekprojects.tk/api/photo"+this.state.project.projectLocationImage}/>
                  <div className="card-action">
                  <button className="btn brown">
                    <i className="material-icons" >favorite</i>
                  </button>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
  )};
}



export default IndividualGroup

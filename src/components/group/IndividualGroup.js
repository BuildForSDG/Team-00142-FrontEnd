import React, { Component } from 'react';
import axios from "axios";
  
class IndividualYouth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    // let { match } = this.props;
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
    // return (
    //   <div className="container-fluid">
    //     <h3>{this.state.isLoading ? <p className="loader">Loading...</p> : this.state.project.projectName}</h3>
    //   </div>
    // );
  return (
    // <div className="cont container-fluid center" key={this.state.project.id}>        
    //       <div className="card">
    //         <div className="col s3 m4">
    //         <span className="card-title"><h4 className="Ptitle">{this.state.isLoading ? <p className="loader">Loading...</p> : this.state.project.projectName}</h4>by Riser Africa</span>
    //           <div className="card center">
    //             <div className="card-image">
    //             </div>
    //             <div className="card-content">
    //               <h5 className="truncate">Assistance: {this.state.project.typeOfAssistanceRequired}</h5>
    //               <p className="truncate">Type: {this.state.project.typeOfProject}</p>
    //               <sup>Demographic - {this.state.project.projectDemographic}</sup>
    //               <br/>
    //               <sup>{this.state.project.projectProposer}</sup>
    //               <br/><hr/><br/>
    //               <i>{this.state.project.projectDetails}</i>
    //             </div>
    //             <div className="card-content">
    //             </div>
    //             <div className="card-action">
    //               <button className="btn brown">
    //                 <i className="material-icons" >favorite</i>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
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
              <div className="">
                <div className="card-image">               
                </div>
                <div className="card-content">
                  <p className="truncate">Assistance: {this.state.project.typeOfAssistanceRequired}</p>
                  <p className="truncate">Type: {this.state.project.typeOfProject}</p>
                  <sup>Demographic - {this.state.project.projectDemographic}</sup>
                  <br/>                                                                       
                </div>
                <div className="card-content">
                </div>                
                </div>
                </div>
                </div>
                <div className="row">
                <h5><b>Project Description</b></h5>
                <div className="center">
                <div className="row">
                  
                  <div className="col m10 offset-m1">
                  <p>
                    {this.state.project.projectDetails}
                  </p>
                  </div>
                  </div>
                  </div>
                  
                  <br/>
                  <br/><br/> 
                  </div>
                  <div className="row">
                <h5><b>Project Supporting Documents</b></h5>                  
                  <a href={"https://riserafrica.georgekprojects.tk"+this.state.project.financialDocumentation} download>  <img src = "https://georgekariukiportfolio.tk/imagesForTeam00142/icons8-pdf-48.png"/>Click To Download Business Case</a>
                  <br></br>
                  <a href={"https://riserafrica.georgekprojects.tk"+this.state.project.businessCaeDocumentation} download>  <img src = "https://georgekariukiportfolio.tk/imagesForTeam00142/icons8-pdf-48.png"/> Click To Download Financial Breakdown</a>
                  <br/>
                  <br/><br/> 
                  </div>
                  


              {/* </div> */}
              <i>Project Images Here...</i>   
              <br></br>
                  <div className="row">
                    <div className="center">
                    <div className="col md2 offset-m1">
                    <img src = "https://georgekariukiportfolio.tk/imagesForTeam00142/index3.jfif"/>
                    </div>
                    <div className="col md2 offset-m1">
                    <img src = "https://georgekariukiportfolio.tk/imagesForTeam00142/six.jfif"/>
                    </div>
                    <div className="col md2 offset-m1">
                    <img src = "https://georgekariukiportfolio.tk/imagesForTeam00142/eight.jfif"/>
                    </div>
                    </div>                    
                  </div>               
                  <div className="card-action">
                  <button className="btn brown">
                    <i className="material-icons" >favorite</i>
                  </button>
                </div>
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
  )};
}



export default IndividualYouth

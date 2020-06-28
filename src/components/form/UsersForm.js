import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import GeneralForm from './GeneralForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import NomineeDetailsForm from './NomineeDetailsForm';

class UsersForm extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        {title: 'Visitor Details'},
        {title: 'Personal Details'},
        {title: 'Nominee Details'}
      ]
    };
  }
  // submitHandler = () =>{
      
  //       console.log(this.onSubmit);   
  //       axios.post('https://riserafrica.georgekprojects.tk/api/phaseOne', this.onSubmit)
  //        .then(response => {
  //          console.log(response)
  //        })
  //        .catch(error => {
  //          console.log(error)
  //        })
  //     }
  
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card>
        <Stepper steps={ steps } activeStep={ page } />
        {page === 0 && <GeneralForm onSubmit={this.nextPage} />}
        {page === 1 && (
          <PersonalDetailsForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 2 && (
          <NomineeDetailsForm
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </Card>
    );
  }

}

UsersForm.propTypes = {
  onSubmit: PropTypes.func
};

export default UsersForm;

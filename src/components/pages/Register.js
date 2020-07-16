import React from 'react';
import '../assets/registration.css'
import '../assets/registration.js'

const Register = () => {
  return (
    <div className="cont container-fluid">
      <h3>Please Register</h3>
      <br />
      <form id="msform">
        <ul id="progressbar">
          <li className="active">Account Setup</li>
          <li>Social Profiles</li>
          <li>Personal Details</li>
        </ul>
        <fieldset>
          <h2 className="fs-title">Create your account</h2>
          <h3 className="fs-subtitle">This is step 1</h3>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="cpass" placeholder="Confirm Password" />
          <input type="button" name="next" className="next action-button" value="Next" />
        </fieldset>
        <fieldset>
          <h2 className="fs-title">Social Profiles</h2>
          <h3 className="fs-subtitle">Your presence on the social network</h3>
          <input type="text" name="twitter" placeholder="Twitter" />
          <input type="text" name="facebook" placeholder="Facebook" />
          <input type="text" name="gplus" placeholder="Google Plus" />
          <input type="button" name="previous" className="previous action-button" value="Previous" />
          <input type="button" name="next" className="next action-button" value="Next" />
        </fieldset>
        <fieldset>
          <h2 className="fs-title">Personal Details</h2>
          <h3 className="fs-subtitle">We will never sell it</h3>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="address" placeholder="Address"></textarea>
          <input type="button" name="previous" className="previous action-button" value="Previous" />
          <input type="submit" name="submit" className="submit action-button" value="Submit" />
        </fieldset>
      </form>
    </div>
  );
};

export default Register;

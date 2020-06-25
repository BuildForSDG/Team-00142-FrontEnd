import React from 'react';
import Header from '../layout/Header';

const About = () => {
  return (
    <div className="aboutCont container-fluid">
      <div className="">
        <div className="row">
          <div className="col s3 m4">
            <h3 className="Ptitle">
              <u>About</u>
            </h3>
          </div>
          <div className="col s3 m8">
            <h3 className="Ptitle">Development Team</h3>

            <img
              className="teamM"
              src="https://avatars3.githubusercontent.com/u/28981210?s=460&u=c8426938bd6ee8669f82c63b9d7806c6b445ac0d&v=4"
              alt="george kariuki"
            />
            <small className="Ptitle">George Kariuki</small>
            <p className="tTitle">
              George, who is the main back-end developer, is atively involved in creation of laravel api's ensuring that
              everything is working as expected. With his amazing profiency in laravel, he was able to setup boiler
              plate for the backend team as well as the CI/CD for the app, to ensure that it runs smoothly without a
              challenge. Together with Martin, they ensures that the api's are always kept up to date to ensure correct
              and data consistency.
            </p>

            <hr />
            <br />
            <img
              className="teamM"
              src="https://avatars0.githubusercontent.com/u/60017194?s=460&u=4f41dcda0eba3cc5f88d308526838dac6a5565fa&v=4"
              alt="martin wachira"
            />
            <small className="Ptitle">Martin Wachira</small>
            <p className="tTitle">
              Martin is actively involved in both Back-end and Front-end product development. He is the solo Full-stack
              developer on this amazing project. With quite handful knowledge in Laravel, together with the backend
              team, he actively takes part in the development of project api's. He also works hand in hand with the
              frontend team to ensure that the UI/UX of the site is amazing and appealing using React framework for the
              same.
            </p>

            <hr />
            <br />

            <img
              className="teamM"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFazXhDRNJYCA/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=_gbFisRs7uoEqHHmGeeWK4yZS4g0VwZ-1XNHt69T3cY"
              alt="joseph"
            />
            <small className="Ptitle">Joseph Chiuri</small>
            <p className="tTitle">
              Joseph, the main front-end guy, actively took part in the setting up the boiler plate for react, designing
              and creating necessary components for the project. His main being react, was very crucial for this project.
            </p>

            <hr />
            <br />

            <img
              className="teamM"
              src="https://avatars0.githubusercontent.com/u/60017194?s=460&u=4f41dcda0eba3cc5f88d308526838dac6a5565fa&v=4"
              alt="martin wachira"
            />
            <small className="Ptitle">Martin Wachira</small>
            <p className="tTitle">
              Martin is actively involved in both Back-end and Front-end product development. He is the solo Full-stack
              developer on this amazing project. With quite handful knowledge in Laravel, together with the backend
              team, he actively takes part in the development of project api's. He also works hand in hand with the
              frontend team to ensure that the UI/UX of the site is amazing and appealing
            </p>

            <hr />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

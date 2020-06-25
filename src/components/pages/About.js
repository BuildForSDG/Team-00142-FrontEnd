import React from 'react';
import Header from '../layout/Header';

const About = () => {
  return (
    <div className="aboutCont card">
      <div className="contentFont">
        <div className="row">
          <div className="col s3 m4">
            <h3 className="Ptitle">
              <u className="card-title">About</u>
            </h3>
            <h5>Riser Africa</h5>
            was a brainchild idea of this five amazing developers. <small>=></small> <br/>As an SDG Goal, the "5 muskateers"
            unanimously decided that No Poverty goal, problem statement 2, was the best and that it would address every
            members' vision and ideas. From this solid foundation, they all sat and figured out the best way to achieve
            this goal. That is when Riser Africa was thought and put down into idealization and actualization.{' '}
            <em>Basically</em>, Riser Africa, is a web forum app, that allows project owners of any kind from atmost
            the marginalised areas of the country, upload and state their project ideas with the hope of attracting an
            investor. Thanks to this amazing system, that the project owners are connected with investors who believe and
            are interested in their idea, and from that, guesse what, the project gets funded. Isn't this an absolute
            nice way of conquering poverty?
          </div>
          <div className="col s3 m8">
          <h3 className="Ptitle">
              <span className="card-title">Development Team</span>
            </h3>

            <img
              className="teamM"
              src="https://avatars3.githubusercontent.com/u/28981210?s=460&u=c8426938bd6ee8669f82c63b9d7806c6b445ac0d&v=4"
              alt="george kariuki"
            />
            <small className="Ptitle">George Kariuki</small>
            <p className="tTitle">
              <a href="https://github.com/GeorgeKariuki7205">George</a>, who is the main back-end developer, is atively
              involved in creation of laravel api's ensuring that everything is working as expected. With his amazing
              profiency in laravel, he was able to setup boiler plate for the backend team as well as the CI/CD for the
              app, to ensure that it runs smoothly without a challenge. Together with Martin, they ensures that the
              api's are always kept up to date to ensure correct and data consistency.
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
              <a href="https://github.com/martinwachira">Martin</a>, with his diversity, actively got involved in both
              back-end and front-end product development. He is the solo Full-stack developer on this amazing project.
              With quite handful knowledge in Laravel, together with the backend team, he actively takes part in the
              development of project api's. He also works hand in hand with the frontend team to ensure that the UI/UX
              of the site is amazing and appealing using React framework for the same.
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
              <a href="https://github.com/Chiuri254">Joseph</a>, the main front-end guy, actively took part in the
              setting up the boiler plate for react, designing and creating necessary components for the project. His
              main being react, was very crucial for this project.
            </p>

            <hr />
            <br />

            <img
              className="teamM"
              src="https://avatars1.githubusercontent.com/u/37038018?s=460&u=81d0940a792fd53ab6951130d73d8280416654b6&v=4"
              alt="wilson"
            />
            <small className="Ptitle">Wilson</small>
            <p className="tTitle">
              <a href="https://github.com/Wilson-Ochieng/">Wilson</a> took part in the front-end team.
            </p>
            <hr />
            <br />

            {/* <img
              className="teamM"
              src="https://avatars0.githubusercontent.com/u/60017194?s=460&u=4f41dcda0eba3cc5f88d308526838dac6a5565fa&v=4"
              alt="wilson"
            /> */}
            <small className="Ptitle">Carlos</small>
            <p className="tTitle">Carlos took part in the front-end team.</p>

            <hr />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

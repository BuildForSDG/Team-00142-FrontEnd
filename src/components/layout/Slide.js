import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

// import "normalize.css/normalize.css";


const content = [
  {
    title: ' Dairy Business For One Of Our Alumnis.',
    description:
    'I chose to start with dairy farming because I needed compost manure since I had a big plan to use the remaining money to start aquaculture and horticulture farming since manure is good for algae needed in fish pond and crops growths. ',

    image: 'https://georgekariukiportfolio.tk/imagesForTeam00142/index5.jfif'
   
  },
  {
    title: 'Poultry Farming From A Youth Group.',
    description:
      'Poultry farming in Kenya is playing an important role in the total economy and fulfilling the nutrition demand in Kenya. Reports shows that some people are becoming billionaires by commercial poultry farming in Kenya. Most of the farmers of Kenya raise egg laying or broiler chicken. Raising some other domestic birds can also be seen in Kenya.',
    image: 'https://georgekariukiportfolio.tk/imagesForTeam00142/index6.jfif'
   
  },
  {
    title: 'Irrigation Farming To One Of The Communities We Sponsored.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    image: 'https://georgekariukiportfolio.tk/imagesForTeam00142/index3.jfif'
   
  }
];

const Slide = () => (
  <div>
    <div className="wrapper">
      <p></p>
    </div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Slide;

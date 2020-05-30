import React, { Fragment} from 'react';
import riser from './riser.jpeg';

const Riser = () => {
  return (
    <Fragment>
       <img
        src={riser}
        alt="Loading..."
        style={{ width: "280px", margin: "auto", display: "block" }}
      />
    </Fragment>
  )
}

export default Riser

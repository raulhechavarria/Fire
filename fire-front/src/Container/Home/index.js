import React, { Component } from 'react';

import TopCityDashBoard from './TopCityDashBoard'
import TopZipCodeDashBoard from './TopZipCodeDashBoard'
import '../../CSS/Home.css'

class Home extends Component {
    
  render() {
    return (
      <div className='home'>
        <div className='row'>      
              <div className='col-md-6'><TopCityDashBoard/></div>
              <div className='col-md-6'><TopZipCodeDashBoard/></div>
          </div>      
      </div>
    );
  }
}

export default Home;

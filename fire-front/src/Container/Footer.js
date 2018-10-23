import React, { Component } from 'react';
import PropType from 'prop-types';

class Footer extends Component {

    static propType = {
        copyright: PropType.array.isRequired
    }

  render() {
      const {copyright} = this.props 
    return (
     <div className='Footer'>
        {copyright}
     </div>
    );
  }
}

export default Footer;

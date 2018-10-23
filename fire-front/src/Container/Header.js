import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../CSS/Header.css';
import {Link} from 'react-router-dom'


class Header extends Component {

    static propType = {
        items: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
      }

  render() {
      const {items, title} = this.props
   //  const {logo: img}
    return (
     <div className="Header">
     
                 <h1>{title}</h1>     
            <ul className="menu">
            {items && items.map((item,key) => <li key={key}><Link to={item.url}><h2>{item.title}</h2></Link></li>)}
            </ul>     
    </div>
    );
  }
}

export default Header;

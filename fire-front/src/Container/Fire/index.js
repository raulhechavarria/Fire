import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import '../../CSS/Fire.css'

class Fire extends Component {

    constructor () {
    super()
    this.state = {
      items: [{}],
      streetandnumber: '',
      zipcode:''
    }
  }

  componentDidMount () {
    this.loadFires()
  }

  onSearchstreetandnumber(e, streetandnumber){
    e.preventDefault()
    return axios.get('/fire/streetandnumber/' + streetandnumber) ///axios llamasat http
	      .then((result) => {
	        this.setState({items: result.data})
	      })
  }
  
  onSearchzipcode(e, zipcode){
    e.preventDefault()
    return axios.get('/fire/zipcode/' + zipcode) ///axios llamasat http
	      .then((result) => {
	        this.setState({items: result.data})
	      })
  }

  
  onDelete (e, id) {
    e.preventDefault()
    if (window.confirm('Are you sure to delete: ' + id + '?')) {
      // delete
    	axios
    	.delete('/fire/' + id)
    	.then((res) => {
    	//	alert(res.data.message)
    		this.loadFires();
    		//window.confirm('done')
       	this.props.history.push('/fire')
        })
 }
  }

 
  
  loadFires() {
	    return axios.get('/fire') ///axios llamasat http
	      .then((result) => {
	        this.setState({items: result.data})
	      })
  }

  render () {
    const { items, streetandnumber, zipcode } = this.state
    return (
      <div className='Fires'>
          <h3>List Incident <Link to='/Fire/new' className='btn btn-primary'>New</Link></h3>

          <FormGroup>
          <Label for='streetandnumber'>Search Address</Label>
        <Input type='streetandnumber' name='streetandnumber' id='streetandnumber' value={streetandnumber} onChange={(e) => this.setState({ streetandnumber: e.target.value })} />
        <Button color='primary' onClick={(e) => this.onSearchstreetandnumber(e, streetandnumber)}>Search</Button>
        
        <Label for='zipcode'> Search zipcode</Label>
        <Input type='zipcode' name='zipcode' id='zipcode' value={zipcode} onChange={(e) => this.setState({ zipcode: e.target.value })} />
        <Button color='primary' onClick={(e) => this.onSearchzipcode(e, zipcode)}>Search</Button>
        
      </FormGroup>
        
          <div className='row'>
            <div className='col-md-3'>Address</div>
            <div className='col-md-3'>Zipcode</div>
            <div className='col-md-3'>Action</div>
          </div>
          {items.map((item, i) =>
            <div className='row' key={i}>
              <div className='col-md-3'>{item.streetandnumber} + {item.city}</div>
              <div className='col-md-3'>{item.zipcode}</div>
              <div className='col-md-3'>
                <a href={'/fire/edit/' + item.id}>Edit</a>
                <a href='/' onClick={(e) => this.onDelete(e, item.id)}>Delete</a>
              </div>
            </div> 
          )}
        
      </div>
    )
  }
}

export default Fire

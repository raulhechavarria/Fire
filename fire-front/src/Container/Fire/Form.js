
import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'

class FireForm extends Component {

  constructor () {
    super()
    this.state = {
        streetandnumber: '',
        city:  '',
        state: '',
        zipcode: '',
        date:''
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
	 this.loadFire()
  }
  
  loadFire() {
    const { match } = this.props
    const id = match.params.id
    if (id) {
      // load the Fire data
    	axios.get('/fire/' + id)
        .then((result) => {
    	  let items = result.data
      	  this.setState({
            streetandnumber: items.streetandnumber|| '',
            city: items.city|| '',
            state: items.state|| '',
            zipcode: items.zipcode|| '',
            date: items.date|| ''
      	  })
        }) 
    }
  }

 onSubmit () {
    const { streetandnumber, city, state, zipcode, date } = this.state
    const { match } = this.props
    const id = match.params.id

    const obj = {
      id,
      streetandnumber, 
      city, 
      state, 
      zipcode, 
      date
    }

    if (!id) {
      // create new
      axios.post('/fire', obj)
        .then(function (response) {
          alert(response.data.id)
        })
    } else {
      // update
      axios.put('/fire', obj)
        .then(function (response) {
          alert(response.data.id)
         
        })
    }
    this.props.history.push('/fire',this.state)  
  }

  render () {
    const {streetandnumber, city, state, zipcode, date } = this.state
    const { match } = this.props

    return (
      <div>
        <h3>Fire Data Id:{match.params.id}</h3>
        <Form>
        <FormGroup>
        <Label for='streetandnumber'>streetandnumber</Label>
        <Input type='streetandnumber' name='streetandnumber' id='streetandnumber' value={streetandnumber} onChange={(e) => this.setState({ streetandnumber: e.target.value })} />
      </FormGroup>
        <FormGroup>
        <Label for='city'>city</Label>
        <Input type='city' name='city' id='city' value={city} onChange={(e) => this.setState({ city: e.target.value })} />
      </FormGroup>
        <FormGroup>
        <Label for='state'>state</Label>
        <Input type='state' name='state' id='state' value={state} onChange={(e) => this.setState({ state: e.target.value })} />
      </FormGroup>
      <FormGroup>
        <Label for='zipcode'>zipcode</Label>
        <Input type='zipcode' name='zipcode' id='zipcode' value={zipcode} onChange={(e) => this.setState({ zipcode: e.target.value })} />
      </FormGroup>

      <FormGroup>
            <Label for='date'>date</Label>
            <Input type="date" name='date'      id='date' value={date} onChange={(e) => this.setState({ date: e.target.value })} / >
      </FormGroup>

          <Button color='primary' onClick={this.onSubmit}>Submit</Button>
          <Button onClick={() => this.props.history.push('/fire')}>Cancel</Button>
         
        </Form>
      </div>
    )
  }
}

export default FireForm

// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleChange = event => {
    this.setState({name: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default BandInput

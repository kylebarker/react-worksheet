import React, { Component } from 'react';

class Footer extends Component {


  render () {
    return (
      <div>
      <p>{this.props.currentName}</p>
        <input
          type="text"
          placeholder={this.props.currentName}
          value={this.props.newName}
          onChange={(e) => this.props.handleChange(e.target.value)}
          />
        <br/>
        <button onClick={this.props.changeClick}>Change Name</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}
export default Footer;

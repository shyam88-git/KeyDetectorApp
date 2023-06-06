import React, { Component } from 'react'

 class KeyDetector extends Component {

    constructor(props){

        super(props);

        this.state={key:"" , code: ""};
        this.handleDown=this.handleDown.bind(this);

    }

    handleDown=(event)=>{

        this.setState({key: event.key , code:event.code});
        

    }
  render() {
    return (
      <div>

        <h2>Key Detector</h2>
        <h2> Key : {this.state.key}</h2>
        <h2>Code:{this.state.code}</h2>

        <input type="text" onKeyDown={this.handleDown} placeholder="Do Something"/>

      </div>
    )
  }
}
export default KeyDetector;

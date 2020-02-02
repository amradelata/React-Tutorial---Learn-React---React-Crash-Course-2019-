  import React, { Component } from 'react';


  class Counter extends Component {
    state = {
      count : 0,
      imgUrl : 'https://images.pexels.com/photos/3576955/pexels-photo-3576955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    };
    styles = {color: 'red'};
    render() {
      return (
        <div>
          <img src={this.state.imgUrl}/> 
          <span style={this.styles} className="m-2 badge badge-primary">{this.formatCount()}</span>
          <button style={{color: 'red'}} className="btn btn-secondary btn-sm">Increment</button>
        </div>
      );
    }
    formatCount() {
  const { count } = this.state;
  return count === 0 ? 'Zero' : count;
}
  }


  export default Counter; 



  import React, { Component } from 'react';


  class Counter extends Component {
    state = {
      count : 0,
       imgUrl : 'https://images.pexels.com/photos/3576955/pexels-photo-3576955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      tags: [{body: 'body1'},{body: 'body2'},{body: 'body3'}]
    };
    
    render() {
      let classes = "badge-";
      classes += this.state.count === 0 ? 'warning' :  'primary';
      return (
        <div>
          <img src={this.state.imgUrl}/> 
          <span className={classes}>{this.formatCount()}</span>
          <button  className="btn btn-secondary btn-sm">Increment</button>
          <ul>
      { this.state.tags.map(tag => <li key={tag.body}>{tag.body}</li>)}
          </ul>
        </div>
      );
    }
    formatCount() {
  const { count } = this.state;
  return count === 0 ? 'Zero' : count;
}
  }


  export default Counter; 



 import React, { Component } from 'react';

  class Counter extends Component {
    render() {
      let classes = "m-2 p-2 badge-";
      classes += this.props.counter.value === 0 ? 'warning' :  'primary';
      return (
        <div>
      {this.props.children}
      <span className={classes}>{this.props.counter.value}</span>
          <button onClick={() => this.props.onIncrment(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
          <button onClick={() => this.props.onDelet(this.props.counter.id)} className="btn btn-danger btn-sm">delet</button>
 
        </div>
      );
    }


      formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? 'Zero' : value;
      }

  }


  export default Counter; 
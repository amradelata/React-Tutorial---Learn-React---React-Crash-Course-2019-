import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
  
  render() {
    return ( 
    
    <div>
      <button 
      onClick={this.props.onReset}
      className="btn btn-primary btn-sm">
      reset
      </button>

     {this.props.counters.map(counter => 

     <Counter 
     key={counter.id}
     onDelet={this.props.onDelet} 
     counter={counter} 
     onIncrment={this.props.onIncrment}
     />
       
    //  <h4>Title{counter.id}</h4>
     
     )}

     
    </div> 
    );
  }
}

export default Counters;


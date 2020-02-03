import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
  state = { 
    counters: [
      {id: 1 , value: 3},
      {id: 2 , value: 5},
      {id: 3 , value: 0},
      {id: 4 , value: 0},
      {id: 5 , value: 0},
    ]
   };
    handelDelet = (counterId) => {
      // console.log('delet', counterId)
      const counters =this.state.counters.filter(c => c.id != counterId);
      this.setState({counters: counters})
      // if the key like the value we can do it like this  this.setState({counters})
    }
  render() {
    return ( <div>

     {this.state.counters.map(counter => 

     <Counter key={counter.id} onDelet={this.handelDelet} counter={counter}>
       
     <h4>Title{counter.id}</h4>
       </Counter>
     
     )}
    </div> );
  }
}

export default Counters;
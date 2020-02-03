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
    handelreset = () =>{
      const counters =  this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
    };
    handelincrment = counter => {
      // console.log(counter)
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters})
    }
  render() {
    return ( <div>
      <button onClick={this.handelreset} className="btn btn-primary btn-sm">reset</button>

     {this.state.counters.map(counter => 

     <Counter key={counter.id} onDelet={this.handelDelet} counter={counter} onIncrment={this.handelincrment}>
       
     <h4>Title{counter.id}</h4>
       </Counter>
     
     )}

     
    </div> );
  }
}

export default Counters;
import React from 'react';
import NavBar from './components/navbar';
import Counters from './components/Counters';
import './App.css';

class App extends Component {
  state = { 
    counters: [
      {id: 1 , value: 3},
      {id: 2 , value: 5},
      {id: 3 , value: 0},
      {id: 4 , value: 0},
      {id: 5 , value: 0},
    ]
   }
    handelDelet = (counterId) => {
      // console.log('delet', counterId)
      const counters =this.state.counters.filter(c => c.id != counterId);
      this.setState({counters: counters})
      // if the key like the value we can do it like this  this.setState({counters})
    };
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
    };
  render() {
    return ( 
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onDelet={this.handelDelet}
            onReset={this.handelreset}
            onIncrment={this.handelincrment}
          />
        </main>
      </React.Fragment>
     );
  }
}

export default App;


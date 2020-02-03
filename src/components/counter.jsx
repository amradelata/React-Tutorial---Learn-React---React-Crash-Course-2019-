  import React, { Component } from 'react';


  class Counter extends Component {
    state = {
      count : 10,
      tags: [ {body: 'body1'},{body: 'body2'},{body: 'body3'}]
      
    };
      renderTags() {
      // another way to to do if condition 
      if(this.state.tags.length === 0) return <p>ther are no tags</p>

      return <ul> { this.state.tags.map(tag => <li key={tag.body}>{tag.body}</li>)}</ul>
      };
      constructor(){
        super();
        this.handelIncrament = this.handelIncrament.bind(this)
      }
      handelIncrament = () =>{
        // console.log(this.state.count+=1)
        this.setState({count: this.state.count+=1})
        
        // this.state.count+=1 
      }
    render() {
      let classes = "m-2 p-2 badge-";
      classes += this.state.count === 0 ? 'warning' :  'primary';
      return (
        <div>
          <span className={classes}>{this.state.count}</span>
          <button onClick={this.handelIncrament} className="btn btn-secondary btn-sm">Increment</button>
         {/* if this true this.state.tags.length === 0  do this<p>ther are no tags</p> */}
          {/* how we do if condition */}
          {this.state.tags.length === 0 &&<p>ther are no tags</p>}
          {this.renderTags()}
        </div>
      );
    }

  }


  export default Counter; 



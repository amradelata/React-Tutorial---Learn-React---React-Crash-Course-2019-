  import React, { Component } from 'react';


  class Counter extends Component {
    state = {
      count : 0,
      tags: []
      // {body: 'body1'},{body: 'body2'},{body: 'body3'}
    };
    renderTags() {
      // another way to to do if condition 
      if(this.state.tags.length === 0) return <p>ther are no tags</p>
      
      return <ul> { this.state.tags.map(tag => <li key={tag.body}>{tag.body}</li>)}</ul>
         
        
    }
    render() {

      return (
        <div>
         {/* if this true this.state.tags.length === 0  do this<p>ther are no tags</p> */}
          {/* how we do if condition */}
          {this.state.tags.length === 0 &&<p>ther are no tags</p>}
          {this.renderTags()}
        </div>
      );
    }

  }


  export default Counter; 



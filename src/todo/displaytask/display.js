import React, { Component } from 'react'

export default class Display extends Component 
{

    constructor(props)
    {
        super(props);
        this.deletedClicked = this.deletedClicked.bind(this);
    }


  genrateLi(array)
  { 
    return array.map((element,i) => {
        return (<button key={i} onClick={this.deletedClicked(i)}>{element}</button>)
    });

    
  }  

  deletedClicked(index)
  {
    return ()=>
    {
       this.props.deleteTodo(index) 
    }
  }

  render() 
  {
    return (
      <div>
        <ul>
           {
               this.genrateLi(this.props.array)
           }
        </ul>
      </div>
    )
  }
}

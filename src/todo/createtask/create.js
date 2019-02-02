import React, { Component } from 'react'

export default class Create extends Component 
{
    state = {
        ipt_value:''
    }

    saveTodo()
    {
        this.props.saveTodo( this.state.ipt_value );
        this.setState({ipt_value:''})
    }

    handleChange(event)
    {
        let value = event.target.value;

        this.setState({ipt_value:value});
    }

    render() 
    {
        return (
        <div>
            <input value={this.state.ipt_value} onChange={ this.handleChange.bind(this) } placeholder='create task'/>
            <button onClick={this.saveTodo.bind(this)}>create</button>
        </div>
        )
    }
}

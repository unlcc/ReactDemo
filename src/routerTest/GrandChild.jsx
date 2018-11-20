import React from 'react';

export default class GrandChild extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
        <div>
            <h3>Grand Child</h3>
            <div>{this.props.someProp}</div>
        </div>
        )
    }
}
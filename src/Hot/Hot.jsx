import React from 'react';

export default class Hot extends React.Component{
    goto(){
    }

    render(){
        return (
            <div>
                热映
                <button onClick={() => this.goto()}>{this.props.name}</button>
            </div>
        )
    }
}
import React from 'react';

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.prop}</h2>
            </div>
        )
    }
}
import React from 'react';
import { renderRoutes } from 'react-router-config'

export default class Root extends React.Component{
    render(){
        return (
            <div>
                <h1>Root</h1>
                {renderRoutes(this.props.route.routes, {prop: 'homehome'})}
            </div>
        )
    }
}
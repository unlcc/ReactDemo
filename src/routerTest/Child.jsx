import React from 'react';
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default class Child extends React.Component{
    render(){
        return(
        <div>
            <h2>Childhkkldfksd</h2>
            <Link to={`/child/a`} >999</Link>
            {renderRoutes(this.props.route.routes, { someProp: 'i Am AaA' })}
        </div>
        )
    }
}
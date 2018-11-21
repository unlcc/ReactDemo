import React from 'react';
import { Link } from "react-router-dom";
export default class Hot extends React.Component{
    goto(){
        this.props.history.push('/detail')
    }

    render(){
        return (
            <div>
                热映
                <Link to="/detail" className={'fontBlack'}>sdfhdkfdklsfdashfklsh但是客户发的客户</Link>
                <button onClick={() => this.goto()}>假按揭</button>
            </div>
        )
    }
}
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

export class App extends React.Component{
    render() {
        return (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
            </ul>
            {this.props.children}
        </div>
        )
    }
}


export class About extends React.Component{
    render() {
        return (
          <div>
            <h2>About</h2>
            {this.props.children || "Welcome to your About"}
          </div>
        )
      }
}

export class Inbox extends React.Component{
    render() {
        return (
          <div>
            <h2>Inbox</h2>
            {this.props.children || "Welcome to your Inbox"}
          </div>
        )
      }
}
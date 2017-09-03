import React from 'react';
import { Link } from 'react-router';

export class HomePage extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <h1>Administration</h1>
                <p>Rounter</p>
            <Link to="about" className="btn btn-primary">About</Link>    
            </div>    
        );
    }
}
import React from 'react';
import { render } from 'react-dom';

class HelloWorld extends React.Component{
    render(){
        return (
            <h1> Hello {this.props.name}</h1>
        )
    }
}

export default HelloWorld
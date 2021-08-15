import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


 class hornedBeasts extends Component {
    render() {
        return (
            <div>
                
               <h2>  {this.props.title}  </h2>
               <img src={this.props.image} alt={this.props.title}/>
               <p> {this.props.description}</p>
               
            </div>
        )
    }
}

export default hornedBeasts

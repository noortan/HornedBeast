import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

 class hornedBeasts extends Component {
     constructor(){
         super() ;
         this.state = {
             favorite : 0 ,
             clicked : false ,
         };
     }
     clickHandler = () => {
        this.setState({
          favorite: this.state.favorite + 1,
          clicked: true,
        });
      };
      setIsShown = (value) => {
        this.setState({
          clicked: value,
        });
      };
    render() {
        return (
            <div 
            className = 'beast'
            onMouseEnter={() => this.setIsShown(true)}
            onMouseLeave={() => this.setIsShown(false)}
            style={{ background: this.state.clicked ? 'burlywood' : 'Gray' }}
            >
                  <h2>{this.props.data.title}</h2>
                  <Col xs = {6} md = {4}>
                <img  
                className = 'beastImage'
                onClick={this.clickHandler}
                src={this.props.data.image_url}
                thumbnail/>
              </Col>
              <span> favorite : {this.state.favorite} </span>{''}
        <span style={{ color: this.state.clicked ? 'CaptionText' : 'pink' }}>
          &#9825;
        </span>
                <p>{this.props.description}</p> 
            </div>
        )
    }
}

export default hornedBeasts
import React, { Component } from 'react'

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

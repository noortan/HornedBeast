import React, { Component } from 'react'

 class hornedBeasts extends Component {
    render() {
        return (
            <div>
                  <h2>title</h2>
                <img style={{width:'100px'}} src='https://designshack.net/wp-content/uploads/placehold.jpg' alt='' title=''/>
                <p>DESCRIPTION</p> 
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

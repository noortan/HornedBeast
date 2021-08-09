import React, { Component } from 'react'
import HornedBeasts from './hornedBeasts'
import data from './data.json'

 class Main extends Component {
    render() {
        return (
            <div className = 'main'>
                 {data.map((beast) => {
          return <HornedBeasts data={beast} key={beast.title} />;
        })}
            </div>
        )
    }
}

export default Main  
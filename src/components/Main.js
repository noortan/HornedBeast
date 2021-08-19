import React from 'react';
import HornedBeasts from './Hornedbeasts';
import Data from './Data.json'

class Main extends React.Component {
  
  render() {

    return (
      <div>
        {
          Data.map((item, index) => {
            return (
              <HornedBeasts modeldata={this.props.modeldata} dataselected={this.props.dataselected} title={item.title} img_url={item.image_url} description={item.description} key={index} />
            )
          })
        }


      </div>
    )

  }
}
export default Main;
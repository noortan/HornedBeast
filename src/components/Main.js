import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data' ;

class Main extends React.Component {
  render() {

    return (
      <div>
        {
          data.map((item, index) => {
            return (
              <HornedBeasts title={item.title} img_url={item.image_url} description={item.description} key={index} />
            )
          })
        }


      </div>
    )

  }
}
export default Main;
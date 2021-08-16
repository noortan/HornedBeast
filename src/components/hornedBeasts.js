import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfChoicen: 0
    }
  }

  increaseOfchoice = () => {
    this.setState({
      numberOfchoice: this.state.numberOfChoicen + 1
    })
  }
  render() {


    return (
      <div className="hornedstyle">
        {/* <h3>{this.props.title}</h3>
        <img src={this.props.img_url} alt='' width='300'  onClick={this.increaseOfchoice} />
        <p>{this.props.description}</p>
        <p>🦄 {this.state.numberOfchoice} 🦄</p> */}

        <Card style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.img_url} />
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              click the here if you like it 🦄
            </Card.Text>
            <Button variant="primary" onClick={this.increaseOfchoice}>😍</Button>
            <Card.Text>
            {this.state.numberOfChoicen}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )

  }
}
export default HornedBeasts;
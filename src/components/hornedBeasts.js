import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

            <Card.Img variant="top" src={this.props.img_url} />
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )

  }
}
export default HornedBeasts;
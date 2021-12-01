import './App.css';
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import UploadImage from './UploadImage';
import { Modal } from 'react-bootstrap';
import HTTPService from "./HTTPService";

class App extends Component {
  
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({show: false});
  };

  tempMethod = () => {
    var result = HTTPService.getImageById(1)
    .then(res => {
            console.log(res.data);
            alert("Image served successfully")
    })
    console.log(result);
  };

  render() {
    return (
      <div className="container">
        <div>
          <Button variant="primary" onClick={this.tempMethod}>Display all images</Button>
        </div>
        <br/>
        <Button onClick={() => this.setState({show: true})}>Upload image file!</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Image File</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UploadImage/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  } 
}

export default App;

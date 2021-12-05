import './App.css';
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import UploadImage from './UploadImage';
import { Modal } from 'react-bootstrap';
import HTTPService from "./HTTPService";

class App extends Component {
  
  state = {
    show: false,
    imageSrc: '',
    imageName: '',
    imageDescription: '',
    imagePrice: 0.0,
    imageId: null
  };

  handleClose = () => {
    this.setState({show: false});
  };

  tempMethod = () => {
    HTTPService.getImageById(1)
    .then(res => {
            console.log(res.data);
            var imageValue = "data:image/jpeg;base64,"+res.data.encodedContent;
            this.setState({imageSrc: imageValue});
            this.setState({imageId: res.data.id});
            this.setState({imageName: res.data.name});
            this.setState({imageDescription: res.data.description});
            this.setState({imagePrice: res.data.price});
            alert("Image served successfully")
    })
  };

  render() {
    return (
      <div className="container">
        <div>
          <Button variant="primary" onClick={this.tempMethod}>Display all images</Button>
          <img alt="This is supposed to be an bruh" src={this.state.imageSrc} height='100' width='200'/>
          <br/>
          {this.state.imageId}
          <br/>
          {this.state.imageName}
          <br/>
          {this.state.imageDescription}
          <br/>
          {this.state.imageName}
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

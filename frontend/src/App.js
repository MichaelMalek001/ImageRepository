import './App.css';
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import UploadImage from './UploadImage';
import { Modal } from 'react-bootstrap';
import ImageTable from './ImageTable';

class App extends Component {
  
  state = {
    show: false,
  };

  handleClose = () => {
    this.setState({show: false});
  };

  render() {
    return (
      <div className="container">
        <br/>
        <div className="row justify-content-center"> 
          <Button onClick={() => this.setState({show: true})}>Upload image file!</Button>
        </div>
        <br/>
        <h2 style={{"textAlign": "center"}}>Curretnly Uploaded Images</h2>
        <br/>
        <div style={{"textAlign": "center"}}>
          <ImageTable/>
        </div>
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

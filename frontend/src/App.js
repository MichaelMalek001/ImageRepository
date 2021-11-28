import './App.css';
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HTTPService from './HTTPService';
import Button from 'react-bootstrap/Button';

class App extends Component {
  
  state = {
    // Initially, no file is selected
    selectedFile: null
  };

  // On file select (from the pop up)
  onFileChange = event => {

    // event.preventDefault();

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  
  };

  // On file upload (click the upload button)
  onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile
    );
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);
  
    // Request made to the backend api
    // Send formData object
    HTTPService.upload(formData)
    .then(res => {
            console.log(res.data);
            alert("File uploaded successfully.")
    })
  };

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="form-group files color">
                    <label>Upload Your File </label>
                    <input type="file" className="form-control" name="file" onChange={this.onFileChange}/>
                    <Button onClick={this.onFileUpload}>Upload!</Button>
                </div>
            </div>
        </div>
      </div>
    );
  } 
}

export default App;

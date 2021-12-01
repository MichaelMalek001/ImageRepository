import { Form } from "react-bootstrap";
import React from "react";
import Button from 'react-bootstrap/Button';
import HTTPService from "./HTTPService";

const UploadImage = () => {

    const [selectedFile, setSelectedFile] = React.useState(null);
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(0.00);
    const [description, setDescription] = React.useState('');

    // On file select (from the pop up)
    const onFileChange = (event) => {
        // event.preventDefault();

        // Update the state
        setSelectedFile(event.target.files[0]);
    }

    // On file upload (click the upload button)
    const onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();
    
        // Update the formData object
        formData.append("file", selectedFile);

        formData.append("name", name);

        formData.append("price", price);

        formData.append("description", description);
    
        // Details of the uploaded file
        console.log(selectedFile);
    
        // Request made to the backend api
        // Send formData object
        HTTPService.upload(formData)
        .then(res => {
                console.log(res.data);
                alert("File uploaded successfully.")
        })   

        setName('');
        setPrice(0.00);
        setDescription('')
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Enter name of the image"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" value={price} onChange={(e) => {setPrice(e.target.value)}} placeholder="Enter name of the image" min={0} max={100} step={0.1} precision={2}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder="Enter a description of the image"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Image File</Form.Label>
                <Form.Control type="file" className="form-control" name="file" onChange={onFileChange}/>
            </Form.Group>
            <Button onClick={onFileUpload}>Upload!</Button>
        </Form>
    );
}

export default UploadImage
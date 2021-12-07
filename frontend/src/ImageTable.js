import React from "react";
import Button from 'react-bootstrap/Button';
import HTTPService from "./HTTPService";
import { Table } from "react-bootstrap"
import ImageRow from "./ImageRow";

const ImageTable = () => {

    const [images, setImages] = React.useState([]);

    const getImages = () => {
        HTTPService.getAllImages()
        .then(res => {
                setImages(res.data);
        })
      };

    const imageRows = images.map(image => (<ImageRow image={image} key={image.id}></ImageRow>))


    return (
        <div>
            <Button onClick={getImages}>Refresh table!</Button>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Image</th>
                <th>Id</th>
                <th>Name</th>
                <th>Price ($)</th>
                <th>Description</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {imageRows}
            </tbody>
            </Table>
        </div>
    );
}

export default ImageTable
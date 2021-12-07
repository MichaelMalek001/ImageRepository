import React from "react";
import Button from 'react-bootstrap/Button';
import HTTPService from "./HTTPService";
import { Table } from "react-bootstrap"
import ImageRow from "./ImageRow";

const ImageTable = () => {

    const [images, setImages] = React.useState([]);
    /*var imageValue = "data:image/jpeg;base64,"+res.data.encodedContent;
    this.setState({imageSrc: imageValue});
    <img alt="Random" src={this.state.imageSrc} height='100' width='200'/>*/

    const tempMethod = () => {
        HTTPService.getAllImages()
        .then(res => {
                setImages(res.data);
        })
      };

      const imageRows = images.map(image => (<ImageRow image={image} key={image.id}></ImageRow>))

    return (
        <div>
            <Button onClick={tempMethod}>Update table!</Button>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Image</th>
                <th>Id</th>
                <th>Name</th>
                <th>Price ($)</th>
                <th>Description</th>
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
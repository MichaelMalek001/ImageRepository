import React from "react";
import Button from "react-bootstrap/Button"
import HTTPService from "./HTTPService";

function ImageRow(props) {
    
    const deleteRow = () => {
        HTTPService.deleteImageById(props.image.id);
    };

    return (
        <tr>
        <td><img alt="Random" src={"data:image/jpeg;base64,"+props.image.encodedContent} height="200" width="250"></img></td>
        <td>{props.image.id}</td>
        <td>{props.image.name}</td>
        <td>{props.image.price}</td>
        <td>{props.image.description}</td>
        <td><Button variant="danger" onClick={deleteRow}>Delete</Button></td>
        </tr>
    )
}

export default ImageRow
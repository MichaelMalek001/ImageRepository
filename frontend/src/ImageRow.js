import React from "react";

function ImageRow({image}, {key}) {
    return (
        <tr>
        <td><img alt="Random" src={"data:image/jpeg;base64,"+image.encodedContent} height="200" width="250"></img></td>
        <td>{image.id}</td>
        <td>{image.name}</td>
        <td>{image.price}</td>
        <td>{image.description}</td>
        </tr>
    )
}

export default ImageRow
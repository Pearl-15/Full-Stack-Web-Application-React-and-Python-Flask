import React, {useState} from "react";
import { Card, Button, CardGroup } from "react-bootstrap";

const ImageCard = ({image, deleteImage}) => {

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () =>{
    setShowFullText(!showFullText);
  };

  const truncateText = (text, maxLength) => {
    if(text.length <= maxLength){
      return text;
    }
    return text.slice(0,maxLength)+"...";
  }; 

  return (
    <CardGroup>
      <Card style={{ width: '450px', height: '300px', position: 'relative' }} >
        <Card.Body className="d-flex flex-column justify-content-end align-items-center">
        <Card.Img variant="top" src={image.urls.small} style={{ objectFit:'cover', width:'100%', maxHeight: '200px',minHeight:'200px', overflow: 'hidden' }} />
          <Card.Title>{image.title}</Card.Title>
          <Card.Text style={{ maxHeight: '150px',minHeight:'150px',overflow: 'hidden' }}>
            {showFullText
              ? image.description || image.alt_description
              : truncateText(image.description || image.alt_description, 30)}
            {!showFullText && (
              <Button
                variant="link"
                onClick={toggleShowFullText}
                style={{ paddingLeft: 0, marginLeft: 0,fontSize:'0.8rem' }}
              >
                See More
              </Button>
            )}
            {showFullText && (
            <Button
              variant="link"
              onClick={toggleShowFullText}
              style={{ paddingLeft: 0, marginLeft: 0 , fontSize:'0.8rem'}}
            >
              Show Less
            </Button>
          )}
            
          </Card.Text>
          <Button style={{ position: 'absolute', bottom: '10px', right: '10px' ,backgroundColor: "#f28a29" ,borderStyle: "none"}} className="btn-sm" onClick={() => {
              deleteImage(image.id)
          }}>Delete</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};
export default ImageCard;

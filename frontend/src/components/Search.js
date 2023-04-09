import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";



const Search = (props) => {
  return (
    <Container className="mt-4" >
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={props.handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control 
                type="text"
                value={props.word}
                onChange={(e)=>props.setWord(e.target.value)}
                placeholder="Search for new images..." />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;

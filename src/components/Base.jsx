import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

const Base = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};

export default Base;

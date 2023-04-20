import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link } from 'react-router-dom'

export default function FeaturedBooksModal({book}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        LEARN MORE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{book.description}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
          // onClick={handleClose}
          ><Link to="/bookshelf">Go to Book</Link>
            {/* Book Detail */}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to Shelf
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

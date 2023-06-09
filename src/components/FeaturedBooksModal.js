// import Button from 'react-bootstrap/Button';
// import {Link } from 'react-router-dom'

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from '../styles/bookModal.module.css'



export default function FeaturedBooksModal({book}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.Modal}>
      <button className='primary'
      // variant="primary" 
      onClick={handleShow}>
        LEARN MORE
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{book.description}</p></Modal.Body>
        <Modal.Footer>
          {/* <button variant="secondary" 
          // onClick={handleClose}
          >
            <Link to="/bookself">Go to Book</Link> 
          </button> */}
          <button variant="primary" onClick={handleClose}>
            Add to Shelf
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

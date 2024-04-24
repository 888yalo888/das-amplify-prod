import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddYouthButton, YouthCreateForm } from '../ui-components';

function AddYouth() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AddYouthButton overrides={{ AddYouthButton: { onClick: handleShow, justifyContent: "flex-end" }}}></AddYouthButton>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Youth</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouthCreateForm onCancel={handleClose}></YouthCreateForm>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddYouth;
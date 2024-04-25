import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddYouthButton, YouthCreateForm } from '../ui-components';
import useStore from '../store/store';

function AddYouth() {
  const [show, setShow] = useState(false);
  const store = useStore();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setYouthData = (fields) => {
    const updatedFields = {...fields};
        updatedFields['status'] = 'ACTIVE';
        // updatedFields['site'] = store.currentSite;
        return updatedFields;
  }

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
          <YouthCreateForm onCancel={handleClose} onSubmit={setYouthData}></YouthCreateForm>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddYouth;
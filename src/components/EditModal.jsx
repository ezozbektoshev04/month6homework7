import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditModal = ({
  handleEditClose,
  show,
  handleInputChange,
  updated,
  editSubmitContact,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="pt-3 pb-3">
            <div className="filed pt-3 pb-3">
              <label htmlFor="firstName">Firstname</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={updated.firstName}
                onChange={handleInputChange}
                name="firstName"
              />
            </div>
            <div className="filed pt-3 pb-3">
              <label htmlFor="lastName">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={updated.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="filed pt-3 pb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={updated.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editSubmitContact}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;

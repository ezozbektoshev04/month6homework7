import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ContactModal = ({
  show,
  handleClose,
  handleSubmit,
  handleChange,
  contactInput,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
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
                value={contactInput.firstName}
                onChange={handleChange}
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
                value={contactInput.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="filed pt-3 pb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={contactInput.phone}
                onChange={handleChange}
                name="phone"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactModal;

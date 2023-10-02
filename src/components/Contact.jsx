import React, { useEffect, useState } from "react";
import AddContact from "./AddContact";
// import EditModal from "./EditModal";
import ContactModal from "./ContactModal";
import axios from "axios";
// import EditModal from "./EditModal";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [contact, setContact] = useState([]);
  const [contactInput, setContactInput] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [inputText, setInputText] = useState("");

  //Functions
  const deleteContact = (id) => {
    try {
      axios.delete(`http://localhost:3000/allContact/${id}`);
      fetchContact();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setContactInput({
      ...contactInput,
      [e.target.name]: e.target.value,
    });
  };
  // const getFavorite = () => {};

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const response = await axios.get("http://localhost:3000/allContact");
      const data = response.data;
      setContact(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();

    try {
      axios.post("http://localhost:3000/allContact", contactInput);
      fetchContact();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    setContactInput({
      firstName: "",
      lastName: "",
      phone: "",
    });
  };
  const searchvalue = (e) => {
    let value = e.target.value.toLowerCase();
    setInputText(value);
  };

  return (
    <div>
      <div className="d-flex w-100 pt-3 pb-4 gap-4">
        <form
          className="d-flex w-75 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-div  w-75">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              onChange={searchvalue}
              className="form-control"
              id="search"
            />
          </div>
          <div className="form-div">
            <select
              name="filterContact"
              id="filterContact"
              className="form-select"
            >
              <option value="All Contact">All Contact</option>
              <option value="Favorites">Favorites</option>
            </select>
          </div>
        </form>
        <button className="btn btn-primary" onClick={handleShow}>
          Add Contact
        </button>
      </div>
      <AddContact
        fetchContact={fetchContact()}
        contact={contact}
        deleteContact={deleteContact}
        inputText={inputText}
        // fetchContact={fetchContact}
        // editSubmitContact={editSubmitContact}
        // updated={updated}
        // editContact={editContact}
      />
      <ContactModal
        handleClose={handleClose}
        contactInput={contactInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        show={show}
      />
    </div>
  );
};

export default Contact;

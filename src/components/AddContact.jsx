import React, { useState } from "react";
import EditModal from "./EditModal";
import axios from "axios";

const AddContact = ({ contact, deleteContact, inputText, fetchContact }) => {
  const [addFavorite, setAddFavorite] = useState(false);
  const [show, setShow] = useState(false);
  const [updated, setUpdated] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  // function
  const editSubmitContact = (e) => {
    e.preventDefault();
    handleEditClose();
    // contact.map((el) => {
    //   if (el.id === updated.id) {
    //     el.firstName = updated.firstName;
    //     el.lastName = updated.lastName;
    //     el.phone = updated.phone;
    //   }
    // });
    e.preventDefault();
    // handleClose();

    try {
      axios.put(`http://localhost:3000/allContact/${updated.id}`, updated);
      fetchContact;
    } catch (error) {
      console.log(error);
    }
  };
  const editContact = (id) => {
    handleEditShow();
    const cont = contact.find((el) => el.id === id);
    setUpdated({
      id: cont.id,
      firstName: cont.firstName,
      lastName: cont.lastName,
      phone: cont.phone,
    });
  };

  const handleEditShow = () => {
    setShow(true);
  };
  const handleEditClose = () => {
    setShow(false);
  };
  const handleInputChange = (e) => {
    setUpdated({
      ...updated,
      [e.target.name]: e.target.value,
    });
  };

  const filteredContact = contact.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return (
        el.firstName.toLowerCase().includes(inputText) ||
        el.lastName.toLowerCase().includes(inputText)
      );
    }
  });

  const getFavorite = (id) => {
    setAddFavorite(!addFavorite);
  };

  // setAddFavorite(!addFavorite);
  return (
    <div>
      <table className="w-100 table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Action</th>
            <th>Favorites</th>
          </tr>
        </thead>
        <tbody>
          {contact.length > 0
            ? filteredContact.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phone}</td>
                    <td className="d-flex gap-3">
                      <button
                        className="btn btn-success"
                        onClick={() => editContact(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteContact(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => getFavorite(item.id)}
                        style={{ border: "none", background: "transparent" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          style={{ fill: addFavorite ? "gold" : "red" }}
                        >
                          <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>

      <EditModal
        handleEditClose={handleEditClose}
        show={show}
        updated={updated}
        handleInputChange={handleInputChange}
        editSubmitContact={editSubmitContact}
      />
    </div>
  );
};

export default AddContact;

import { useState, Fragment } from "react";
import data from "./api/users.json"
import {nanoid} from "nanoid";
import ReadOnlyRow from "../components/ReadOnlyUsers";
import EditableRow from "../components/EditableUsersRow";


export default function Player() {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="app-container">
      <div>
      <p className="text-gray-700 text-3xl mb-16 font-bold"> List of Users</p>
      <input type="text" placeholder="search..." className="search" onChange={event => {setSearchTerm(event.target.value)}}></input>
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <table className="grid lg:grid-cols-1 gap-4 mb-16">
          <thead>
            <tr className="grid grid-cols-2 md:grid-cols-4">
              <th className="text-start">Name</th>
              <th className="text-start">Address</th>
              <th className="text-start">Email</th>
              <th className="text-start md:text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
          {contacts.filter((val) => {
              if(searchTerm == "") {
                return val
              } else if(val.fullName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val
              }else if(val.address.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val
              }else if(val.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val
              }
            }).map((contact) => (
              <Fragment 
                key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2 className="text-orange-500">Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit} className="bg-orange-100 p-2 rounded">
        <input className="m-1"
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input className="m-1"
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input className="m-1"
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button className="text-gray-400 bg-orange-100 text-orange-500 p-2 rounded" type="submit">Add</button>
      </form>
    </div>
  );
  }
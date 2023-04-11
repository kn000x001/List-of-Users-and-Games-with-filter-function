import { useState, Fragment } from "react";
import data from "./api/games.json";
import {nanoid} from "nanoid";
import ReadOnlyRow from "../components/ReadOnlyGames";
import EditableRow from "../components/EditableGamesRow";

export default function GamesDisplay() {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Category: "",
    Date: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Category: "",
    Date: "",
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
      Name: addFormData.Name,
      Category: addFormData.Category,
      Date: addFormData.Date,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      Category: editFormData.Category,
      Date: editFormData.Date,
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
      Name: contact.Name,
      Category: contact.Category,
      Date: contact.Date,
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
      <p className="text-gray-700 text-3xl mb-16 font-bold"> List of Games</p>
      <input type="text" placeholder="search..." className="search" onChange={event => {setSearchTerm(event.target.value)}}></input>

      </div>
      <form onSubmit={handleEditFormSubmit}>
        <table className="grid lg:grid-cols-1 gap-5 mb-16">
          <thead>
            <tr className="grid grid-cols-4">
              <th className="text-start">Name</th>
              <th className="text-start">Category</th>
              <th className="text-start">Date</th>
              <th className="text-end md:text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.filter((val) => {
              if(searchTerm == "") {
                return val
              } else if(val.Name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val
              }else if(val.Category.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val
              }else if(val.Date.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
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

      <h2 className="text-orange-500">Add a Game</h2>
      <form onSubmit={handleAddFormSubmit} className="bg-orange-100 p-2 rounded">
        <input
          className="m-1"
          type="text"
          name="Name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          className="m-1"
          type="text"
          name="Category"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          className="m-1"
          type="text"
          name="Date"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button className="text-gray-400 bg-orange-100 text-orange-500 p-2 rounded" type="submit">Add</button>
      </form>
    </div>
  );
  }
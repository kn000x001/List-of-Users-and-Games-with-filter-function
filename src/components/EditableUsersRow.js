import React from "react";


const EditableUsersRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {

    return (
        <tr className="rounded mb-3 bg-white align-text-middle shadow-sm grid grid-cols-2 md:grid-cols-4">
           <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="flex md:flex-col">
        <button type="submit" className="m-1 md:m-0 text-gray-400 bg-orange-100 md:bg-gray-200 text-orange-500">Save</button>
        <button type="button" onClick={handleCancelClick} className="m-1 md:m-0 text-gray-400 bg-orange-100 md:bg-gray-200 text-orange-500">
          Cancel
        </button>
      </td>
        </tr>
    );
}

export default EditableUsersRow;
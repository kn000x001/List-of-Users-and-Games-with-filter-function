import React from "react";


const EditableGamesRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {

    return (
        <tr className="rounded mb-3 bg-white align-text-middle shadow-sm grid grid-cols-2 md:grid-cols-4">
           <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="Name"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an category..."
          name="Category"
          value={editFormData.Category}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an date..."
          name="Date"
          value={editFormData.Date}
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

export default EditableGamesRow;
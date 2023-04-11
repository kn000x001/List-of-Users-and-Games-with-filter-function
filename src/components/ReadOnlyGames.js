const ReadOnlyGames = ({contact, handleEditClick, handleDeleteClick}) => {
    
    return (
        <tr className="rounded mb-3 bg-gray align-text-middle shadow-sm grid grid-cols-2 md:grid-cols-4">
            <td className="text-start">{contact.Name}</td>
            <td className="text-start">{contact.Category}</td>
            <td className="text-start">{contact.Date}</td>
            <td className="flex md:flex-col text-end md:text-center">
                <button type="button" className="m-1 md:m-0 text-gray-400 bg-orange-100 md:bg-gray-200 text-orange-500 p-2 rounded" onClick={(event) => handleEditClick(event, contact)}>edit</button>
                <button type="button" className="m-1 md:m-0 text-gray-400 bg-orange-100 md:bg-gray-200 text-orange-500 p-2 rounded" onClick={() => handleDeleteClick(contact.id)}> Delete </button>
            </td>  
        </tr>
    );
}

export default ReadOnlyGames
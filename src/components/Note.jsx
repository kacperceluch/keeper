import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Note(props){

    const handleDelete = (event) => {
        props.onDelete(props.id)
    };

    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <DeleteOutlineIcon onClick={handleDelete} className="delete"/>
        </div>
    );
}

export default Note;
import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function Addnote(props) {
  const [note, setNote] = useState({ title: "", note: "" });
  const [isExpanded, setIsExpanded] = useState(false);
  function onChangeHandle(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }
  const onSubmit = (event) => {
    props.onSubmitHandle(note);
    setNote({ title: "", note: "" });
    event.preventDefault();
  };

  function areaClickHandle() {
    setIsExpanded(true);
  }
  return (
    <form className="create-note">
      {isExpanded && (
        <input
          type="text"
          name="title"
          placeholder="tital"
          value={note.title}
          onChange={onChangeHandle}
        />
      )}
      <textarea
        value={note.note}
        onChange={onChangeHandle}
        name="note"
        id=""
        cols="1"
        rows={isExpanded ? 3 : 1}
        onClick={areaClickHandle}
        placeholder="Take a note.."
      ></textarea>
      <Zoom in={isExpanded}>
        <Fab onClick={onSubmit}>
          <AddCircleIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default Addnote;

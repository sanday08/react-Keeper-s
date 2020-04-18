import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
 import Note from "./Note";
import Addnote from "./Addnote";
// import Notes from "./Notes";

function App() {

  const [notes, setNotes] = useState([]);
  
  function onSubmitHandle(note) {
    console.log(note);
    setNotes((pre) => {
      return [...pre, note];
    });
    console.log(notes);
    
  }
function deleteRec(id){
 setNotes((pre)=>{return pre.filter((note,index)=>{
    return(index!==id)
  })})
}

   const notei=(n,index)=><Note key={index} id={index} deleteRec={deleteRec} title={n.title} content={n.note} />
  return (
    <div>    
      <Header />
      <Addnote onSubmitHandle={onSubmitHandle}/>
      {console.log(notes.length)
      }
     {notes.map(notei)}
  <Footer />
    </div>
  );
}

export default App;

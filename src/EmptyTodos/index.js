import React from "react";
//import rule from '../assets/images/Ruled_paper_note_with_pin.png';
import './EmptyTodos.css';

function EmptyTodos(){
    return(
        <div className="EmptyTodo-Container">
          
             <p className="EmptyTodo-text--uno">No tienes Tareas</p>
             <p className="EmptyTodo-text--dos">Usa el botón + para agregar nuevas tareas</p>
        </div>
    
    )
}


export {EmptyTodos};
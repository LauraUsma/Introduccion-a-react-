import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import {TodoCounter} from '../TodoCounter/index.js';
import {TodoSearch} from '../TodoSearch/index.js';
import {TodoList} from '../TodoList/index.js';
import {TodoItem} from '../TodoItem/index.js';
import { TodoForm } from '../TodoForm/index.js';
import {CreateTodoButton} from '../CreateTodoButton/index.js';
import {Modal} from '../Modal';
import {TodosLoading} from '../TodoLoading/index';
import {EmptyTodos} from '../EmptyTodos/index';
import {TodosError} from '../TodoError/index';

function AppUI(){

   const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    } =  React.useContext(TodoContext);
    
    return (
        <React.Fragment>
     <TodoCounter />
     <TodoSearch />
     <TodoList>
           {error && <TodosError/>}
           {loading && <TodosLoading/>}
           {(!loading && !searchedTodos.length) && <EmptyTodos/>}
      
      
           {searchedTodos.map(todo => (
                  <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed = {todo.completed} 
                  onComplete={()=>toggleCompleteTodo(todo.text)}
                  onDelete ={()=>deleteTodo(todo.text)}
                  />
              ))}
      </TodoList>
     {
      !!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )
     }

   <CreateTodoButton
   setOpenModal = {setOpenModal}
   openModal = {openModal}
   />
</React.Fragment>
    );
}

export {AppUI};
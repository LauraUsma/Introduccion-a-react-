import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/*const defaultTodos=[
  {text:'cortar cebolla',completed:false },
  {text:'tomar curso',completed:false },
  {text:'hablar por telefono',completed:true }

]*/

function App() {

  return (
  <TodoProvider>
      <AppUI/>
  </TodoProvider>

  );
}

export default App;

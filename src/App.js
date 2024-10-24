import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { YourTask } from './YourTask';
import { TituloTask } from './TituloTask'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar ocn la llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  return (
    <>
      <YourTask>
        <TituloTask />
        <TodoCounter completed={16} total={25} />
        <TodoSearch />

        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </YourTask>

    </>
  );
}

export default App;

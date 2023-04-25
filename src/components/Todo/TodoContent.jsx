import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists'
import mockData from '../../data/todos.json'
import { useState } from 'react';

export function TodoContent() {

  const [todos, setTodos] = useState(mockData);
  console.log(todos);

    return (
      <main className="content">
        <TodoHeader />
        <AddTodo />
        <TodoLists todos={todos}/>
      </main>
    );
}
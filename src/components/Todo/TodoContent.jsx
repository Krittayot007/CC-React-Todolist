import { v4 as uuidv4} from 'uuid'
import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists'
import mockData from '../../data/todos.json'
import { useState } from 'react';

export function TodoContent() {

  const [todos, setTodos] = useState(mockData);

  const handleAddTodo = (newtask) => {
    // มี new todo
    let newtTodoObj = {id: uuidv4(), task: newtask, status: false, due_date: ''}

      // สร้าง state ไหม่
      // update state โดย new state
    // const newTodos = [newtTodoObj, ...todos]
    // setTodos(newTodos);

    // update state โดย callback
    setTodos(currentState => [newtTodoObj, ...currentState]);
  }

    return (
      <main className="content">
        <TodoHeader />
        <AddTodo onAddTodo={handleAddTodo}/>
        <TodoLists todos={todos}/>
      </main>
    );
}
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

  // UPDATE-TODO
  const handleEdittodo = (todoId, updateObj) => {

    // Modufy Array
    // #1 FindIndex
    const foundedIndex = todos.findIndex(todoObj => todoObj.id === todoId)

    // notfounded
    if(foundedIndex === -1) return;

    // founded
    const newTodos = [...todos];
    newTodos[foundedIndex] = {...newTodos[foundedIndex],task : updateObj};
    setTodos(newTodos);
  }

  const handleDelete = (todoId) => {

    // Logic : Manipulate Array

    // #1
    // const foundedIndex = todos.findIndex(todoObj => todoObj.id === todoId)
    // if(foundedIndex == -1) return;
    // const newTodos = [...todos]
    // newTodos.splice(foundedIndex,1)
    // setTodos(newTodos)

    // #2
    setTodos(curr=> curr.filter((todoObj)=> todoObj.id !== todoId))
}

  

    return (
      <main className="content">
        <TodoHeader />
        <AddTodo onAddTodo={handleAddTodo}/>
        <TodoLists todos={todos} onEditTodo={handleEdittodo} onDeleteTodo={handleDelete}/>
      </main>
    );
}
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./App.scss"; 
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TodoContent } from "../components/Todo/TodoContent";
// import mockData from '../data/todos.json'
import { getSevenDayRange } from '../utils/DateUtills';

function App() {
  // ## LOGIC : HOOK
  const [todos, setTodos] = useState([]);
  const [filterList,setFilterList] = useState([])

  useEffect(() => {
    // RUN After DID MOUNT (เกิดแล้ว)
    axios ({
      method: 'get',
      url : 'http://localhost:8080/todos'
    }).then (response => {
      console.log(response.status);
      console.log(response);
      console.log(response.data);
      console.log(response.data.todos);

      let todoList = response.data.todos;
      setTodos(todoList);
      setFilterList(todoList);

    }).catch(err => {
      console.log(err.response.status)
     }) 
  }, [])

// ## LOGIC : FN 
// Fillter Todo
const handleFilterLists = (index) => {
  const [nowStr, nextSevenStr] = getSevenDayRange();
  let filteredTodo = [...todos]

  // FILTER LOGIC : Schema for fillter "2023-04-29" == YYYY-MM-DD
  if (index == 0) {
    setFilterList(todos)
}
else if (index === 1) {
    filteredTodo = todos.filter((todoObj) => todoObj.date === nowStr);
    setFilterList(filteredTodo)
}
else if (index === 2) {
    filteredTodo = todos.filter(
        (todoObj) => todoObj.date >= nowStr && todoObj.date <= nextSevenStr
    );
    setFilterList(filteredTodo)
}
  // setTodos(filteredTodo);
  setFilterList(filteredTodo)
};

  // Serach Todo
  const handleSearch = (searchText) => {
        
    const newTodo = todos.filter((todoObj)=> todoObj.task.includes(searchText))
    setFilterList(newTodo)

}

  return (
    <div className="container">
      <Header onSearchText={handleSearch}/>
      <Sidebar onSelectTab={handleFilterLists}/>
      <TodoContent todos={filterList} setTodos={setTodos}/>
    </div>
  );
}

export default App;

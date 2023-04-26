import { useState } from 'react';
import "./App.scss"; 
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TodoContent } from "../components/Todo/TodoContent";
import mockData from '../data/todos.json'
import { getSevenDayRange } from '../utils/DateUtills';

function App() {
  const [todos, setTodos] = useState(mockData);
  const [filterList,setFilterList] = useState(mockData)
// Fillter Todo

const handleFilterLists = (index) => {
  const [nowStr, nextSevenStr] = getSevenDayRange();
  let filteredTodo = [...mockData]

  // FILTER LOGIC : Schema for fillter "2023-04-29" == YYYY-MM-DD
  if (index === 1) {
       filteredTodo = mockData.filter((todoObj) => todoObj.due_date === nowStr);
  } else if (index === 2) {
       filteredTodo = mockData.filter(
          (todoObj) => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenStr
      );
  }
  setTodos(filteredTodo);
  setFilterList(filteredTodo)
};

  // Serach Todo
  const handleSearch = (searchText) => {
        
    const newTodo = filterList.filter((todoObj)=> todoObj.task.includes(searchText))
    setTodos(newTodo)

}

  return (
    <div className="container">
      <Header onSearchText={handleSearch}/>
      <Sidebar onSelectTab={handleFilterLists}/>
      <TodoContent todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

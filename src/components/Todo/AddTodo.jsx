import styles from "./AddTodo.module.scss";
import { TodoForm } from "./TodoForm";
import { useState } from "react";

export function AddTodo({onAddTodo}) {
  const [isAddMode, setIsAddMode] = useState(false);
  const handleClickAddTask = () => {
    setIsAddMode(true);
  }

  return (
    <>
      {!isAddMode ? (
        <div className={styles.add__todo} onClick={handleClickAddTask}>
          <span>+</span>
          <h3>Add task</h3>
        </div>
      ) : (
        <TodoForm  onSetIsShowForm={setIsAddMode} submitText='Add task' onAddTodo={onAddTodo}/>
      )}
    </>
  );
}

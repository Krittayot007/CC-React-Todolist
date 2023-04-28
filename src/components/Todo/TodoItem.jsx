import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { TodoForm } from './TodoForm';
import { getFormattedDate } from '../../utils/DateUtills';

export function TodoItem ({todo, onEditTodo, onDeleteTodo}) {
  // check === done
  const [isCheck, setIsCheck] = useState(todo.status);
  const [isEdit, setisEdit] = useState(false);

  const handleToggleCheck = () => {
    setIsCheck(!isCheck);
  }

  const handleOpenEditMode = () => {
    setisEdit(true);
  }

  const handleDeleteTodo = () => {
		console.log("delete")
    onDeleteTodo(todo.id);
	}

  let checkboxStyle = isCheck ?  styles.checkbox__icon__done:  styles.checkbox__icon;
  let taskStyle = isCheck ? styles.done : '';

    return (
      <>
        { !isEdit ? (<li className={styles.todo__item__container}>
              <div className={styles.checkbox__container} onClick={handleToggleCheck}>
                <HiCheck className={checkboxStyle} />
              
              </div>

              <p className={taskStyle}>{todo.task}</p>
              <span className={styles.date__text}>{getFormattedDate(todo.date)}</span>
              
              <div className={styles.edit__icon} onClick={handleOpenEditMode}>
                <HiPencil />
              </div>
        
              <div className={styles.delete__icon} onClick={handleDeleteTodo}>
                <HiTrash />
              </div>
        </li>) :
        <TodoForm submitText='Edit task' onSetIsShowForm={setisEdit} todo={todo} onEditTodo={onEditTodo}/>}
      </>
    );
} 
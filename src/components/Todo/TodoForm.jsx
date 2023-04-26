import styles from './TodoForm.module.scss'
import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    submitText: PropTypes.string.isRequired,
    onSetIsShowForm: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func,
    onEditTodo: PropTypes.func,
    todo : PropTypes.oneOfType([
      PropTypes.object,
      undefined
    ])
}


export function TodoForm ({onSetIsShowForm, onAddTodo, onEditTodo, submitText, todo}) {

  const [task, setTask] = useState(todo?.task || '');
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.trim() === '') {
      setIsError(true);
      return;
    }
      // validate pass , execute add to do
       //from <TodoContent />
      if(todo) onEditTodo(todo.id,task);
      else onAddTodo(task);

    // จบ add mode 
    onSetIsShowForm(false);
  };
  const handleClickCancel = (e) => {
    // // from Add todo / add
    // onSetIsAddMode?.(false);
    // // from Todo item / edit
    // onSetIsEditMode?.(false);
    // for Add / foe Edit
    onSetIsShowForm?.(false);
  };
  const handleChangeInput = (e) => {
    setIsError(false);
    setTask(e.target.value);
  };


    return (
        <form className={styles.todo__form__container} onSubmit={handleSubmit}>
          <input className={styles.todo__form__input} placeholder='Task Name' value={task} onChange={handleChangeInput}/>
          <div className={styles.todo__form__footer}>
            {isError && <p className={styles.todo__error}>Title is required</p>}
            <div className={styles.todo__form__buttons}>
              <button type='button' onClick={handleClickCancel}>Cancel</button>
              <button type='submit'>{submitText}</button>
            </div>
          </div>
        </form>
    )
}
import styles from './TodoForm.module.scss'
import React, {useState} from 'react';

export function TodoForm () {

  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  const handleClickCancel = (e) => {
    console.log("Cancel");
  };
  const handleChangeInput = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };


    return (
        <form className={styles.todo__form__container} onSubmit={handleSubmit}>
          <input className={styles.todo__form__input} placeholder='Task Name' value={task} onChange={handleChangeInput}/>
          <div className={styles.todo__form__footer}>
            <p className={styles.todo__error}>Title is required</p>
            <div className={styles.todo__form__buttons}>
              <button type='button' onClick={handleClickCancel}>Cancel</button>
              <button type='submit'>Add Task</button>
            </div>
          </div>
        </form>
    )
}
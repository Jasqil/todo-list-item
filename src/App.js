import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '10px',
  },
  input: {
    flex: '1',
    marginRight: '10px',
    padding: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '5px 10px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  taskList: {
    listStyleType: 'none',
    padding: '0',
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
  },
  taskText: {
    flex: '1',
    textDecoration: 'line-through',
  },
  deleteButton: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>Todo List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Добавьте задачу"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Добавить
        </button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
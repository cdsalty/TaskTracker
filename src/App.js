import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };
  // Add Task
  const addTask = async task => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(task)
    });
    // the data returned is the new task info. Add the new task to the rest of the tasks
    const data = await res.json();
    setTasks([...tasks, data]);
    setShowAddTask(false);
  };

  // Delete Task
  const deleteTask = async id => {
    // we need to fetch the delete method in order to delete from the backend
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });
    // the function below removes from the front end only
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle Task Reminder: Allow user the ability to double click to create/set a reminder and put a border around it that identifies it as a "reminder"
  const taskReminder = id => {
    // console.log(id);
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(prevValue => !prevValue)}
        showAdd={showAddTask}
      />
      {/* What to show... */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={taskReminder} />
      ) : (
        "You have no task as this moment"
      )}
    </div>
  );
};

export default App;

/*
Add Task
const addTask = task => {
    // ID to identify/assign to each set of tasks
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    // setShowAddTask(false)
  };


// Delete Task
  const deleteTask = id => {
    // What should be shown when a task is deleted?
    // set the tasks so it only shows the task ids' that don't match the id;
    // The goal is to remove the task.id that matches the id so it gets deleted from the list of tasks.
    setTasks(tasks.filter(task => task.id !== id));
  };


for the taskReminder...  
- will need to take in the "id" in order to know which reminder to set
- pass down, inside Task.... 
- in tasks, pass in onToggle, and then assign it 

// if task.id matches the id double clicked, spread all the task and change ONLY the reminder
  // of the current state to it's opposite value; otherwise, do nothing and continue to show the task as always(no change). (why not null instad of returning the task?)
  const taskReminder = id => {
    // console.log(id);
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };


*/

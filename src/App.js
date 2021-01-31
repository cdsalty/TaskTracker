import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb. 4th @ 12:00pm",
      reminder: "true"
    },
    {
      id: 2,
      text: "Ellie's Dance Lessons",
      day: "Feb. 6th @ 4:00pm",
      reminder: "true"
    },
    {
      id: 3,
      text: "Yard Clean-up",
      day: "Feb. 3rd @ 10:00am",
      reminder: "false"
    }
  ]);

  // Toggle Task Reminder: Allow user the ability to double click to create/set a reminder and put a border around it that identifies it as a "reminder"
  const taskReminder = id => {
    // console.log(id);
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Delete Task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {/* What to show... */}
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

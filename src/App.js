import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 4th at 12:00pm",
      reminder: "true"
    },
    {
      id: 2,
      text: "Ellie's Dance Lessons",
      day: "Feb 6th at 4:00pm",
      reminder: "true"
    },
    {
      id: 3,
      text: "Yard Clean-up",
      day: "Feb 3rd at 10:00am",
      reminder: "false"
    }
  ]);

  // Delete Task
  const deleteTask = id => {
    // What should be shown when a task is deleted? Only the task id's that aren't equal to the id; Not the task.id that matches the id that matches because it should be deleted.
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;

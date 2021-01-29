import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClick={id => onToggle(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

/*

  <div className="task" onDoubleClick = {taskReminder}>   NOT ABLE TO PASS IT LIKE THIS BECAUSE I NEED TO KNOW WHICH ONE TO ASSOCIATE THE DOUBLECLICK WITH THE REMINDER
  
      i n s t e a d 

  <div className="task" onDoubleClick={() => taskReminder(task.id)}>

*/

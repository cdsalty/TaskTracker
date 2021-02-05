import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    // first check for a task
    if (!text) {
      alert("Please enter a task");
      return;
    }
    // next add the task info
    onAdd({ text, day, reminder });

    // reset the form values to original state
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={e => setReminder(e.target.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
      {/* <button type="submit" className="btn btn-block" value="Save Task">
        Save Task
      </button> */}
    </form>
  );
};

export default AddTask;

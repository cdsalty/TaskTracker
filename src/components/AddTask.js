import { useState } from "react";

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
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
      <div
        className="form-control form-control-check"
        value={reminder}
        onChange={e => setReminder(e.currentTarget.checked)}
      >
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
      {/* <button type="submit" className="btn btn-block" value="Save Task">
        Save Task
      </button> */}
    </form>
  );
};

export default AddTask;

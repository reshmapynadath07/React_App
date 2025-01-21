import React, { useState } from "react";
import "./Testform.css"
 
export const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ id: Date.now(), title, description, priority, status: "Pending" });
    setTitle("");
    setDescription("");
    setPriority("");
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input value={title}  placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
      <textarea value={description}  placeholder="Description"  onChange={(e) => setDescription(e.target.value)}/>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};
export default TaskForm;
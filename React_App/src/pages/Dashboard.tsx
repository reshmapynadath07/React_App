import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import Filter from "../components/Filter";
 
type Task = {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
  };
   
  const Dashboard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [id, setId] = useState(1);
    const [statusFilter, setStatusFilter] = useState("All");
   
    const addTask = (title: string, description: string, status: string,priority: string) => {
      const newTask: Task = {
        id: id,
        title,
        description,
        status,
        priority,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setId((id) => id + 1);
    };
   
    const filteredTasks = tasks.filter((task) => {
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
   
   
    const deleteTask = (id: number) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };
   
    return (
      <div className="container mx-auto p-4">
        <h4>Task Dashboard</h4>
   
   
        <TaskForm onAddTask={addTask} />
   
        <div className="mt-4">
          <Filter
            searchQuery={searchQuery}
            onSearchChange={(value) => setSearchQuery(value)}
          />
         
        </div>
   
        <div className="mt-4">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div key={task.id} className="mb-4">
                <TaskCard
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  priority={task.priority}
                />
                <button onClick={() => deleteTask(task.id)} style={{width: 40 , background : "red"}}>
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No tasks found.</p>
          )}
        </div>
      </div>
    );
  };
   
  export default Dashboard;
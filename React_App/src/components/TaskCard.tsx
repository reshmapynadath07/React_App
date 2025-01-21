import React from 'react';
 
type Props = {
  id: number;
  title: string;
  status: string;
  priority: string;
};
 
const TaskCard: React.FC<Props> = ({title, description, priority}) => {
  return (
    <div className="border rounded shadow-md mb-4">
        <p>Task lists</p>
      <h3 className="text-lg font-bold">Title :{title}</h3>
      <p>Description: {description}</p>
      <p>Priority: {priority}</p>
    </div>
  );
};
 
 
export default TaskCard;
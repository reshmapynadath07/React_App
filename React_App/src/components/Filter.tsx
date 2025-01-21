import React from 'react';
 
type Props = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};
 
const Filter: React.FC<Props> = ({ searchQuery, onSearchChange}) => {
 
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Enter title"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 mr-2 p-2 border rounded"
        required
      />
      <button type='submit' style={{background : "Green", width : 70}} >Search</button>
    </div>
  );
};
 
export default Filter;
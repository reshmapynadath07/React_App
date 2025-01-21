export const fetchTasks = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return response.json();
  };
  
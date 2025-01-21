import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TaskForm } from './components/TaskForm.tsx'
import Dashboard from './pages/Dashboard.tsx'
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <TaskForm />
//   </StrictMode>,
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Dashboard />
    </StrictMode>,
)

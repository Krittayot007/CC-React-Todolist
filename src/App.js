import './App.scss';
import { FaHome } from 'react-icons/fa';

function App() {
  return (
    <div className='container'>
      {/* Header */}
      <header className='header'> 
        <span>
          <FaHome />
        </span>
        <div>CC-Todolist</div> 
      </header>
      {/* Sidebar */}
      <aside className='sidebar'>Sidebar</aside>

      {/* Content */}
      <main className='content'>Content</main>
    </div>
  )
}

export default App;

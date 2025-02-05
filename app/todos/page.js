'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState('普通');

  const priorities = ['緊急', '重要', '普通'];

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos).map(todo => ({
        ...todo,
        priority: todo.priority || '普通'
      }));
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    setTodos([...todos, {
      id: Date.now(),
      text: newTodo,
      completed: false,
      priority: priority
    }]);
    setNewTodo('');
    setPriority('普通');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updatePriority = (id, newPriority) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, priority: newPriority } : todo
    ));
  };

  const getPriorityStyle = (priorityValue) => {
    switch(priorityValue) {
      case '緊急':
        return 'bg-red-100 text-red-800 border-red-200';
      case '重要':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default: // 普通
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">待辦事項</h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="輸入待辦事項..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={`px-4 py-2 border rounded-lg focus:outline-none ${getPriorityStyle(priority)}`}
            >
              {priorities.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPlus} />
              新增
            </button>
          </div>
        </form>

        <ul className="space-y-3">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
            >
              <div className="flex items-center gap-3 flex-1">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-5 h-5 flex items-center justify-center ${
                    todo.completed ? 'text-green-500' : 'text-gray-300'
                  }`}
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                </button>
                <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                  {todo.text}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={todo.priority}
                  onChange={(e) => updatePriority(todo.id, e.target.value)}
                  className={`px-2 py-1 rounded text-sm border ${getPriorityStyle(todo.priority)}`}
                >
                  {priorities.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 flex items-center gap-1"
                >
                  <FontAwesomeIcon icon={faTrash} />
                  刪除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 
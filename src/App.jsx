import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState({});

  const fetchAPI = () => {
    fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache',
    })
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip))
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleAnotherAdvice = () => {
    fetchAPI();
  };

  return (
    <div className='app'>
      <div className="card">
        <h2 className="card-title">Advice #{advice.id}</h2>
        <p className="card-body">"{advice.advice}"</p>
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/>
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3"/>
              <rect x="14" width="6" height="16" rx="3"/>
            </g>
          </g>
        </svg>
        <button onClick={handleAnotherAdvice}>Get Advice</button>
      </div>
    </div>
  )
}

export default App

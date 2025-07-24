import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/hello`);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error connecting to backend');
    } finally {
      setLoading(false);
    }
  };

  return(
    <div className="App">
      <h1>React + Node.js Demo</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{message}</p>
      ) }
    </div>
  )
}

export default App;
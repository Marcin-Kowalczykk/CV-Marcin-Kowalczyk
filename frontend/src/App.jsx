import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const isEnvLocal = false;
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiUrlLocal = import.meta.env.VITE_API_URL_LOCAL;

  console.log('Environment variables:', {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_API_URL_LOCAL: import.meta.env.VITE_API_URL_LOCAL
  });

  const fetchMessage = async () => {
    setIsLoading(true);
    const response = await fetch(`${isEnvLocal ? apiUrlLocal : apiUrl}/api/message`);
    const data = await response.json();

    setMessage(data.message);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>Frontend Vite + React + Express</h1>
      <p>Deployed on Github Pages - test</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Backend message: {message}</p>
      )}
    </div>
  );
}

export default App;
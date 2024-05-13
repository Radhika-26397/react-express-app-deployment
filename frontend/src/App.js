import React, { useEffect, useState } from 'react';

function App() {
  const [backendResponse, setBackendResponse] = useState(null);

  useEffect(() => {
    // Make a GET request to your backend
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => {
        console.log('Response from backend:', data);

        // Update state with the response from backend
        
        setBackendResponse(data);
      })
      .catch(error => {
        console.error('Error fetching data from backend:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>This is a basic React application.</p>
      {backendResponse && (
        <div>
          <h2>Response from Backend:</h2>
          <p>{backendResponse.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;

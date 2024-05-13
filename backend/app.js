// app.js
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});


// Enable CORS for all routes
app.use(cors());


// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Example endpoint to handle GET request from frontend
app.get('/api/data', (req, res) => {
  console.log('Received GET request from frontend:', req.url);
  const data = { message: 'Hello from backend!' };
  console.log('Sending response to frontend:', data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Backend server is listening at http://localhost:${port}`);
});

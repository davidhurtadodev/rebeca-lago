// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'src')));

// Serve static files from the "node_modules" directory
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'src', 'index.html');
  console.log(`Serving index.html from: ${indexPath}`);
  res.sendFile(indexPath);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

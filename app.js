// Import the express module
import express from 'express';

// Create an instance of an express application
const app = express();

// Define a port number
const PORT = 3006;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Enable static file serving
app.use(express.static('public'));

// Define a defaule route ("/")
app.get('/', (req, res) => {
  res.render('home');
});

// Start the server on the designated port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

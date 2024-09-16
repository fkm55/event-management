import express from 'express';

// Create a new router instance
const router = express.Router();

// Define a route for the home page (GET request)
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Define a route for the About page (GET request)
router.get('/about', (req, res) => {
  res.send('This is the About Page!');
});

// Define a route for a dynamic user page (GET request)
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Define a route for posting data (POST request)
router.post('/', (req, res) => {
  const data = req.body;
  res.send(`Data received: ${JSON.stringify(data)}`);
});

// Export the router so it can be used in other parts of the application
export default router;

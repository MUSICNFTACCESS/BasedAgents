// Dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Configuration (if any configuration is needed)
const config = {
  // Add your configuration settings here
};

// Sample data
let consultations = [
  { id: 1, name: 'Consultation 1', description: 'Crypto consultation service 1' },
  { id: 2, name: 'Consultation 2', description: 'Crypto consultation service 2' }
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to BeyondBased Crypto Consulting Dapp!');
});

// Get all consultations
app.get('/consultations', (req, res) => {
  res.json(consultations);
});

// Get a specific consultation by ID
app.get('/consultations/:id', (req, res) => {
  const consultation = consultations.find(c => c.id === parseInt(req.params.id));
  if (!consultation) return res.status(404).send('Consultation not found');
  res.json(consultation);
});

// Add a new consultation
app.post('/consultations', (req, res) => {
  const newConsultation = {
    id: consultations.length + 1,
    name: req.body.name,
    description: req.body.description
  };
  consultations.push(newConsultation);
  res.status(201).json(newConsultation);
});

// Controllers (if needed, you can define controller logic here)
const exampleController = (req, res) => {
  res.send('This is an example controller.');
};

app.get('/example', exampleController);

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
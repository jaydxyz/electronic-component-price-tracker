const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Mock data for component prices
const componentPrices = {
  'CPU001': [
    { date: '2023-06-01', price: 150 },
    { date: '2023-06-15', price: 155 },
    { date: '2023-07-01', price: 148 },
  ],
  'RAM002': [
    { date: '2023-06-01', price: 80 },
    { date: '2023-06-15', price: 85 },
    { date: '2023-07-01', price: 82 },
  ],
  'GPU003': [
    { date: '2023-06-01', price: 300 },
    { date: '2023-06-15', price: 310 },
    { date: '2023-07-01', price: 305 },
  ],
};

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// New endpoint to get the list of queryable components
app.get('/api/components', (req, res) => {
  res.json(Object.keys(componentPrices));
});

app.get('/api/prices/:componentId', (req, res) => {
  const { componentId } = req.params;
  const prices = componentPrices[componentId];
  
  if (prices) {
    res.json(prices);
  } else {
    res.status(404).json({ error: 'Component not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
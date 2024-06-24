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
      { date: '2023-07-15', price: 152 },
      { date: '2023-08-01', price: 149 },
      { date: '2023-08-15', price: 153 }
    ],
    'RAM002': [
      { date: '2023-06-01', price: 80 },
      { date: '2023-06-15', price: 85 },
      { date: '2023-07-01', price: 82 },
      { date: '2023-07-15', price: 84 },
      { date: '2023-08-01', price: 81 },
      { date: '2023-08-15', price: 83 }
    ],
    'GPU003': [
      { date: '2023-06-01', price: 300 },
      { date: '2023-06-15', price: 310 },
      { date: '2023-07-01', price: 305 },
      { date: '2023-07-15', price: 315 },
      { date: '2023-08-01', price: 308 },
      { date: '2023-08-15', price: 312 }
    ],
    'SSD004': [
      { date: '2023-06-01', price: 120 },
      { date: '2023-06-15', price: 125 },
      { date: '2023-07-01', price: 118 },
      { date: '2023-07-15', price: 122 },
      { date: '2023-08-01', price: 119 },
      { date: '2023-08-15', price: 123 }
    ],
    'MB005': [
      { date: '2023-06-01', price: 200 },
      { date: '2023-06-15', price: 205 },
      { date: '2023-07-01', price: 198 },
      { date: '2023-07-15', price: 197 },    
      { date: '2023-08-01', price: 199 },
      { date: '2023-08-15', price: 203 }
    ],
    'PSU006': [
      { date: '2023-06-01', price: 90 },
      { date: '2023-06-15', price: 95 },
      { date: '2023-07-01', price: 94 },    
      { date: '2023-07-15', price: 94 },
      { date: '2023-08-01', price: 91 },
      { date: '2023-08-15', price: 93 }
    ],
    'CASE007': [
      { date: '2023-06-01', price: 70 },
      { date: '2023-07-15', price: 74 },
      { date: '2023-07-15', price: 74 },
      { date: '2023-07-15', price: 74 },
      { date: '2023-08-01', price: 71 },
      { date: '2023-08-15', price: 73 }
    ],
    'COOL008': [
      { date: '2023-06-01', price: 50 },
      { date: '2023 06-15', price: 56 },  
      { date: '2023-07-01', price: 52 },
      { date: '2023-07-15', price: 54 },
      { date: '2023-08-01', price: 51 },
      { date: '2023-08-15', price: 53 }
    ],
    'NIC009': [
      { date: '2023-06-01', price: 30 },
      { date: '2023-06-15', price: 32 },
      { date: '2023-07-01', price: 29 },
      { date: '2023-07-15', price: 31 },
      { date: '2023-08-01', price: 28 },
      { date: '2023-08-15', price: 30 }
    ],

  };

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to get the list of queryable components
app.get('/api/components', (req, res) => {
  res.json(Object.keys(componentPrices));
});

// Endpoint to get prices for a single component
app.get('/api/prices/:componentId', (req, res) => {
  const { componentId } = req.params;
  const prices = componentPrices[componentId];
  
  if (prices) {
    res.json(prices);
  } else {
    res.status(404).json({ error: 'Component not found' });
  }
});

// New endpoint to fetch prices for multiple components
app.get('/api/prices', (req, res) => {
  const componentIds = req.query.components.split(',');
  const result = {};

  for (const componentId of componentIds) {
    if (componentPrices[componentId]) {
      result[componentId] = componentPrices[componentId];
    }
  }

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
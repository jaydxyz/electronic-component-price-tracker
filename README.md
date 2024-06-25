# Electronic Component Price Tracker

Electronic Component Price Tracker is a simple web application that allows users to compare prices of various computer components over time. It provides a visual representation of price trends using interactive charts.

## Features

- Select and compare multiple components simultaneously
- Interactive line chart showing price trends over time
- Responsive design for various screen sizes

## Technologies Used

- Frontend:
  - HTML5
  - CSS3 (Tailwind CSS)
  - JavaScript (ES6+)
  - Chart.js for data visualization
- Backend:
  - Node.js
  - Express.js

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/electronic-component-price-tracker.git
   cd electronic-component-price-tracker
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   node server.js
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Select one or more components from the dropdown menu.
2. Click the "Compare Prices" button to display the price trends.
3. Hover over the chart to see specific prices for each date.

## API Endpoints

- GET `/api/components`: Fetches the list of available components
- GET `/api/prices?components=CPU001,RAM002`: Fetches price data for specified components

## Data Structure

The application uses mock data stored in the `componentPrices` object. Each component has an array of price entries, with each entry containing a date and a price.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Chart.js for the charting library
- Tailwind CSS for the styling framework

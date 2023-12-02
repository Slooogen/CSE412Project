const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'project',  // Change this to your new database name
  password: '123',
  port: 5432,
});

// Serve HTML files directly from the same directory as app.js
app.use(express.static(__dirname));

// Handle login requests

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const express = require('express');
const { setRoutes } = require('./routes/index');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the parent directory (where index.html is)
app.use(express.static(path.join(__dirname, '../../')));

// Set up routes
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
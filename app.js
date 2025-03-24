const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import and use the router
const indexRouter = require('./routes/index');
app.use('/', indexRouter);  // Ensure this points to your correct router

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

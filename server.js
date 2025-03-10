const express = require('express');
const app = express();
const port = 3000;

// Serve static HTML files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

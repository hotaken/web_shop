const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

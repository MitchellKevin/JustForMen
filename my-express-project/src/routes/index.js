function setRoutes(app) {
    // Example route
    app.get('/', (req, res) => {
        res.send('Hello from Express!');
    });

    // API route
    app.get('/api/some-data', (req, res) => {
        res.json({ message: 'Hello from backend!' });
    });
}

module.exports = { setRoutes };
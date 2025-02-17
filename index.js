const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Cookie Manager!');
});
// Set a cookie
app.post('/set-cookie', (req, res) => {
    const { name, value } = req.body;
    res.cookie(name, value, { httpOnly: true });
    res.send(`Cookie ${name} set!`);
});

// Get all cookies
app.get('/get-cookies', (req, res) => {
    res.json(req.cookies);
});

// Delete a cookie
app.delete('/delete-cookie/:name', (req, res) => {
    const { name } = req.params;
    res.clearCookie(name);
    res.send(`Cookie ${name} deleted!`);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

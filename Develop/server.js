const express = require('express');

const app = express();

app.listen(process.env.PORT);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.get('/api/notes', (req, res) => {
    // Inform the client
    res.json(`${req.method} request received to get notes`);

    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
});

app.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a note`);

    // Log our request to the terminal
    console.info(`${req.method} request received to add a note`);
});
const express = require("express");
const path = require('path');
require('dotenv').config();
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/", (req, res) => {
    res.json({ message: "Music Db API" });
});

require("./routes/track")(app);
require("./routes/artist")(app);
require("./routes/album")(app);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}.`);
});

module.exports = app

const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/', require('./Routes/newsapp'));

app.listen(port, () => {
  console.log("Backend Server is connected");
});

--

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota GET
app.get('/', (req, res) => {
  res.send('');
});

// Rota POST
app.post('/', (req, res) => {
  const data = req.body;
  res.send({ message: 'Data received', data: data });
});

// Rota PUT
app.put('/', (req, res) => {
  const updatedData = req.body;
  res.send({ message: 'Data updated', data: updatedData });
});

// Rota DELETE
app.delete('/', (req, res) => {
  res.send({ message: 'Data deleted' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:port`);
});

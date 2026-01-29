const express = require('express');
const app = express(); 
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.post('/api/register', (req, res) => {
  res.json({ status: 'registered' });
});

app.get('/', (req, res) => {
  res.send('Flirt chat platform is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



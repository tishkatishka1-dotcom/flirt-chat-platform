const express = require('express');
const app = express(); 

const PORT = process.env.PORT || 3000;
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.send('Flirt chat platform is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



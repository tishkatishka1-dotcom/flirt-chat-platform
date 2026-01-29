const express = require('express');
const app = express(); 
app.use(express.json());
// --- in-memory users & sessions ---
const users = {
  client: { id: 1, role: 'client', password: 'client' },
  operator: { id: 2, role: 'operator', password: 'operator' },
  admin: { id: 3, role: 'admin', password: 'admin' },
};

const sessions = {}; // token -> user

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



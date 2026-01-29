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
// --- chat in-memory ---
const messages = []; 
// { from: 'client' | 'operator', text: string, ts: number }

const PORT = process.env.PORT || 3000;
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.post('/api/register', (req, res) => {
  res.json({ status: 'registered' });
});
// --- chat api ---
app.post('/api/chat/send', (req, res) => {
  const token = req.headers.authorization;
  const user = sessions[token];

  if (!user) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'empty_message' });
  }

  messages.push({
    from: user.role,
    text,
    ts: Date.now(),
  });

  res.json({ status: 'sent' });
});

app.get('/api/chat/messages', (req, res) => {
  const token = req.headers.authorization;
  const user = sessions[token];

  if (!user) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  res.json(messages);
});

// --- auth (GET for browser test) ---
app.get('/api/login', (req, res) => {
  const { login, password } = req.query;
  const user = users[login];

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }

  const token = Math.random().toString(36).slice(2);
  sessions[token] = user;

  res.json({ token, role: user.role });
});

// --- auth ---
app.post('/api/login', (req, res) => {
  const { login, password } = req.body;
  const user = users[login];

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }

  const token = Math.random().toString(36).slice(2);
  sessions[token] = user;

  res.json({ token, role: user.role });
});

app.post('/api/logout', (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    delete sessions[token];
  }
  res.json({ status: 'logged_out' });
});

app.get('/', (req, res) => {
  res.send('Flirt chat platform is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



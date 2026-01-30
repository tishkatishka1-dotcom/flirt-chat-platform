const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// --- in-memory users & sessions ---
const users = {
  client: { id: 1, role: 'client', password: 'client' },
  operator: { id: 2, role: 'operator', password: 'operator' },
  admin: { id: 3, role: 'admin', password: 'admin' },
};

const sessions = {};
const messages = [];

const PORT = process.env.PORT || 3000;

// health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// auth
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

// chat
app.post('/api/chat/send', (req, res) => {
  const token = req.headers.authorization;
  const user = sessions[token];

  if (!user) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  messages.push({
    from: user.role,
    text: req.body.text,
    ts: Date.now(),
  });

  res.json({ status: 'sent' });
});

app.get('/api/chat/messages', (req, res) => {
  const token = req.headers.authorization || req.query.token;
  const user = sessions[token];

  if (!user) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

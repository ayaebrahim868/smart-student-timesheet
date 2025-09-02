// i apply this node.js file as a middleware Because plain db.json-server doesn’t support POST
const http = require('http');
const fs = require('fs');

const PORT = 3000;

function readDb() {
  const raw = fs.readFileSync('db.json', 'utf8');
  return JSON.parse(raw);
}

const server = http.createServer((req, res) => {
  // ✅ Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, sessionID');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // ✅ GET all students
  if (req.method === 'GET' && req.url === '/api/students') {
    const db = readDb();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(db.students));
  }

  // ✅ POST schedule by ID
  if (req.method === 'POST' && req.url === '/api/schedule') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { id } = JSON.parse(body || '{}');
        const db = readDb();
        const student = db.students.find(s => s.id === id) || null;

        if (student) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(student));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Student not found' }));
        }
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Bad request' }));
      }
    });
    return;
  }

  // fallback
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});

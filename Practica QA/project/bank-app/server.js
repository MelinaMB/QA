const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Servir archivos estáticos desde 'public'

// Simular base de datos
let users = {
    'user1': { password: 'pass1', balance: 1000, token: null },
    'user2': { password: 'pass2', balance: 500, token: null }
};

let transactions = [];

// Endpoint de login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        const token = `token_${username}_${Date.now()}`;
        users[username].token = token;
        res.json({ success: true, token, message: 'Login exitoso' });
    } else {
        res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }
});

// Endpoint para obtener balance
app.get('/api/balance', (req, res) => {
    const token = req.headers.authorization;
    const user = Object.keys(users).find(u => users[u].token === token);
    if (user) {
        res.json({ success: true, balance: users[user].balance });
    } else {
        res.status(403).json({ success: false, message: 'Token inválido' });
    }
});

// Endpoint para transferencias
app.post('/api/transfer', (req, res) => {
    const token = req.headers.authorization;
    const user = Object.keys(users).find(u => users[u].token === token);
    const { amount, toUser } = req.body;
    if (!user) {
        return res.status(403).json({ success: false, message: 'Token inválido' });
    }
    if (users[user].balance >= amount && users[toUser]) {
        users[user].balance -= amount;
        users[toUser].balance += amount;
        transactions.push({ from: user, to: toUser, amount, date: new Date() });
        res.json({ success: true, message: 'Transferencia exitosa', newBalance: users[user].balance });
    } else {
        res.status(400).json({ success: false, message: 'Fondos insuficientes o usuario destino inválido' });
    }
});

// Endpoint para obtener transacciones
app.get('/api/transactions', (req, res) => {
    const token = req.headers.authorization;
    const user = Object.keys(users).find(u => users[u].token === token);
    if (user) {
        const userTransactions = transactions.filter(t => t.from === user || t.to === user);
        res.json({ success: true, transactions: userTransactions });
    } else {
        res.status(403).json({ success: false, message: 'Token inválido' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

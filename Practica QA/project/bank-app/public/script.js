const API_BASE = 'http://localhost:3000/api';

// Login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const response = await fetch(`${API_BASE}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.success) {
            localStorage.setItem('token', data.token);
            window.location.href = 'dashboard.html';
        } else {
            document.getElementById('message').textContent = data.message;
        }
    });
}

// Dashboard
if (window.location.pathname.endsWith('dashboard.html')) {
    const token = localStorage.getItem('token');
    if (!token) window.location.href = 'index.html';

    fetch(`${API_BASE}/balance`, { headers: { 'Authorization': token } })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                document.getElementById('balance').textContent = `$${data.balance}`;
            }
        });

    fetch(`${API_BASE}/transactions`, { headers: { 'Authorization': token } })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                const ul = document.getElementById('transactions');
                data.transactions.forEach(t => {
                    const li = document.createElement('li');
                    li.textContent = `${t.from} -> ${t.to}: $${t.amount} (${t.date})`;
                    ul.appendChild(li);
                });
            }
        });

    document.getElementById('transferBtn').addEventListener('click', () => {
        window.location.href = 'transfer.html';
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    });
}

// Transfer
if (window.location.pathname.endsWith('transfer.html')) {
    const token = localStorage.getItem('token');
    if (!token) window.location.href = 'index.html';

    document.getElementById('transferForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const toUser = document.getElementById('toUser').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const response = await fetch(`${API_BASE}/transfer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ amount, toUser })
        });
        const data = await response.json();
        document.getElementById('transferMessage').textContent = data.message;
        if (data.success) {
            setTimeout(() => window.location.href = 'dashboard.html', 2000);
        }
    });
}

// Check which page we are on
if (document.getElementById('registrationForm')) {
    // Registration page
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        const user = { name, email, password };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        fakeAjaxPost(user, function(response) {
            if (response.success) {
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                alert('User registered successfully!');
                document.getElementById('registrationForm').reset();
            } else {
                alert('Error: Could not register user.');
            }
        });
    });
}

if (document.getElementById('userList')) {
    // Users list page
    window.onload = function() {
        const userListElement = document.getElementById('userList');
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.length === 0) {
            userListElement.innerHTML = '<li>No registered users.</li>';
        } else {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `Name: ${user.name}, Email: ${user.email}`;
                userListElement.appendChild(li);
            });
        }
    }
}

// Fake AJAX POST (simulates backend)
function fakeAjaxPost(data, callback) {
    setTimeout(() => {
        console.log('Simulated POST:', data);
        callback({ success: true });
    }, 500);
}
// Check which page we are on
if (document.getElementById('registrationForm')) {
    // Registration page
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        const user = { name, email, password };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        fakeAjaxPost(user, function(response) {
            if (response.success) {
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                alert('User registered successfully!');
                document.getElementById('registrationForm').reset();
            } else {
                alert('Error: Could not register user.');
            }
        });
    });
}

if (document.getElementById('userList')) {
    // Users list page
    window.onload = function() {
        const userListElement = document.getElementById('userList');
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.length === 0) {
            userListElement.innerHTML = '<li>No registered users.</li>';
        } else {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `Name: ${user.name}, Email: ${user.email}`;
                userListElement.appendChild(li);
            });
        }
    }
}

// Fake AJAX POST (simulates backend)
function fakeAjaxPost(data, callback) {
    setTimeout(() => {
        console.log('Simulated POST:', data);
        callback({ success: true });
    }, 500);
}

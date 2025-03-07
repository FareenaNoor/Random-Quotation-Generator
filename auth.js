document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (password.length < 8) {
        alert('Password should be at least 8 characters');
      } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
      } else {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        window.location.href = 'index.html';
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        window.location.href = 'home.html';
      } else {
        alert('Invalid username or password.');
      }
    });
  }
});

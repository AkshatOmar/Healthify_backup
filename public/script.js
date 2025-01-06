// Login Form Submission
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login Successful!');
  });
  
  // Signup Form Submission
  document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    alert('Signup Successful');
  });
  
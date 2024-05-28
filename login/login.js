const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


//fungsi login
document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle password visibility
    function togglePasswordVisibility(inputField, eyeIcon) {
      const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
      inputField.setAttribute('type', type);
      eyeIcon.classList.toggle('fa-eye-slash');
    }

    // Sign Up
    const toggleSignUpPassword = document.getElementById('toggleSignUpPassword');
    const signUpPassword = document.getElementById('signUpPassword');
    toggleSignUpPassword.addEventListener('click', function() {
      togglePasswordVisibility(signUpPassword, toggleSignUpPassword);
    });

    const signUpButton = document.getElementById('signUpButton');
    signUpButton.addEventListener('click', function() {
      alert('INI WEBSITE STATIS JADI TIDAK ADA DATABASE');
    });

    // Sign In
    const toggleSignInPassword = document.getElementById('toggleSignInPassword');
    const signInPassword = document.getElementById('signInPassword');
    toggleSignInPassword.addEventListener('click', function() {
      togglePasswordVisibility(signInPassword, toggleSignInPassword);
    });

    const signInButton = document.getElementById('signInButton');
    signInButton.addEventListener('click', function() {
      const validUsers = [
        { username: 'Imam', password: 'care203' }
      ];
      const username = document.querySelector('.sign-in-container input[type="text"]').value;
      const password = document.querySelector('.sign-in-container input[type="password"]').value;
      const user = validUsers.find(user => user.username === username && user.password === password);
      if (user) {
        alert('LOGIN BERHASIL, SISTEM AKAN MENUJU HALAMAN HOME');
        window.location.href = '../Home/Home.html'; // Mengarahkan ke halaman home.html setelah login berhasil
      } else {
        alert('PASSWORD SALAH');
      }
    });
  });
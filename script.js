const formTitle = document.getElementById('formTitle');
const authForm = document.getElementById('authForm');
const toggleLink = document.getElementById('toggleLink');
const emailInput = document.getElementById('email');
let isLogin = true;

toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isLogin = !isLogin;
    if (isLogin) {
        formTitle.textContent = 'Login';
        toggleLink.textContent = "Don't have an account? Sign up";
        emailInput.style.display = 'none';
    } else {
        formTitle.textContent = 'Sign Up';
        toggleLink.textContent = 'Already have an account? Login';
        emailInput.style.display = 'block';
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (isLogin) {
        console.log('Login attempt:', { username, password });
        alert('Login functionality would be implemented here');
    } else {
        console.log('Signup attempt:', { username, email, password });
        alert('Signup functionality would be implemented here');
    }
});
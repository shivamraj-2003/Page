function showForm(formType) {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const tabs = document.querySelectorAll('.tab');

    if (formType === 'signup') {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Sign up form submitted!');
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login form submitted!');
});
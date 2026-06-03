/* ============================================
   Void.Praveen - JavaScript (Vanilla JS only)
   Features:
   - Mobile navbar toggle
   - Login form validation
   - Signup form validation
   - Chat send message (UI only)
   ============================================ */

/* -----------------------------------------------
   UTILITY: Show error message inside a form card
   ----------------------------------------------- */
function showError(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = message;
    el.classList.add('visible');
  }
}

function hideError(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.classList.remove('visible');
  }
}

/* -----------------------------------------------
   NAVBAR: Mobile hamburger toggle
   ----------------------------------------------- */
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close navbar when any link is clicked (on mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* -----------------------------------------------
   LOGIN PAGE: Form Validation
   ----------------------------------------------- */
function initLoginForm() {
  const form = document.getElementById('loginForm');
  if (!form) return; // not on login page, skip

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent actual form submission

    const email    = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Hide previous error
    hideError('loginError');

    // Validation rules
    if (email === '' || password === '') {
      showError('loginError', 'Please fill in all fields.');
      return;
    }

    // // Simple email format check
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailPattern.test(email)) {
    //   showError('loginError', 'Please enter a valid email address.');
    //   return;
    // }

    if (password.length < 6) {
      showError('loginError', 'Password must be at least 6 characters.');
      return;
    }

    // If validation passes — redirect to dashboard
    // (In a real app, you'd verify with a backend first)
    window.location.href = 'dashboard.html';
  });
}

/* -----------------------------------------------
   SIGNUP PAGE: Form Validation
   ----------------------------------------------- */
function initSignupForm() {
  const form = document.getElementById('signupForm');
  if (!form) return; // not on signup page, skip

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload

    const name     = document.getElementById('signupName').value.trim();
    const email    = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirm  = document.getElementById('signupConfirm').value.trim();

    // Hide previous error
    hideError('signupError');

    // Check all fields are filled
    if (name === '' || email === '' || password === '' || confirm === '') {
      showError('signupError', 'All fields are required. Please fill them in.');
      return;
    }

    // // Email format check
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailPattern.test(email)) {
    //   showError('signupError', 'Please enter a valid email address.');
    //   return;
    // }

    // Password length check
    if (password.length < 6) {
      showError('signupError', 'Password must be at least 6 characters long.');
      return;
    }

    // Password match check
    if (password !== confirm) {
      showError('signupError', 'Passwords do not match. Please try again.');
      return;
    }

    // All checks passed — redirect to login
    alert('Account created successfully! Please log in.');
    window.location.href = 'login.html';
  });
}

/* -----------------------------------------------
   UTILITY: Escape HTML to prevent XSS
   ----------------------------------------------- */
function escapeHTML(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/* -----------------------------------------------
   INIT: Run all functions when DOM is ready
   ----------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initLoginForm();
  initSignupForm();
  initChat();
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Здесь можно добавить проверку логина и пароля, например, отправкой запроса на сервер
    // и проверкой данных
    
    console.log("Логин: " + username);
    console.log("Пароль: " + password);
});

const themeToggle = document.getElementById('theme-toggle');
const loginContainer = document.getElementById('login-container');

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    loginContainer.classList.add('dark-mode');
  } else {
    loginContainer.classList.remove('dark-mode');
  }
});

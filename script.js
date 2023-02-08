const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const tel = document.getElementById('tel').value;
  const texto = document.getElementById('texto').value;

  alert(`Nome: ${name}\nEmail: ${email}\nTel: ${tel}\nTexto: ${texto}`);
  form.reset();
});


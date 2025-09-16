// Array para guardar los nombres
let amigos = [];

// Función para añadir amigos
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // elimina espacios extras

  if (nombre === "") {
    alert("Ingresa un nombre por favor");
    return;
  }

  // Guardamos el nombre en el array
  amigos.push(nombre);

  // Mostramos la lista actualizada
  mostrarLista();

  // Limpiamos el campo de texto
  input.value = "";
  input.focus();
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiamos antes de mostrar

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Primero agrega al menos un amigo antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

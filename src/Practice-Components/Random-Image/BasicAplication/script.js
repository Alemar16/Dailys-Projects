const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 5;
let currentImageId;

// Genera las imágenes por primera vez al cargar la página
generateImages();

// Agregar evento de clic a las imágenes para abrir el modal
container.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const imageLink = document.getElementById("imageLink"); // Obtener el elemento del enlace
    modal.style.display = "block";
    modalImage.src = e.target.src;
    currentImageId = e.target.src.split("/").slice(-1)[0]; // Obtener el identificador de la imagen actual
    imageLink.href = `${unsplashURL}${currentImageId}`; // Establecer el enlace al origen de la imagen
  }
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Agregar un listener de evento click al botón de actualización
const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", generateImages);

// Función para generar las imágenes
function generateImages() {
  container.innerHTML = ""; // Limpia el contenedor antes de agregar nuevas imágenes
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
  }
}

// Función para obtener un tamaño aleatorio
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

// Función para obtener un número aleatorio
function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

var imagenes = ["descarga (3).jfif", "descarga (2).jfif", "descarga (1).jfif", "descarga.jfif"];
var indice = 0;

function cambiarImagen() {
  indice = (indice + 1) % imagenes.length;
  document.getElementById("imagen").src = imagenes[indice];
}
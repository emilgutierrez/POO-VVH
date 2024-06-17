<script>
function toggleButton(button) {
  if (button.classList.contains("active")) {
    button.classList.remove("active");
    button.classList.add("inactive");
    button.innerHTML = "Desactivado";
  } else {
    button.classList.remove("inactive");
    button.classList.add("active");
    button.innerHTML = "Activado";
  }
}
</script>
</body>
</html>
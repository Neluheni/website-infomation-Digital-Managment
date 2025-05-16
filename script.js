function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("loader").style.display = "block";
  });
});

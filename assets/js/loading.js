const loading = document.getElementsByClassName("loading");

window.addEventListener("load", () => {
  // DO SOMETHING
  setTimeout(() => {
    loading[0].classList.toggle("hidden");
  }, 1000);
});

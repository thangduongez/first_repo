const loading = document.getElementsByClassName("loading");
console.log(loading[0]);
setTimeout(() => {
  loading[0].classList.toggle("hidden");
}, 1000)
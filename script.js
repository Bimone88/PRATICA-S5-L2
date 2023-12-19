function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mostra il pulsante "Torna in cima" quando si scende in basso
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".toTopIcon").style.display = "block";
  } else {
    document.querySelector(".toTopIcon").style.display = "none";
  }
};

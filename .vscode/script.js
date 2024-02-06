function togglemode() {
  const html = document.documentElement

  html.classList.toggle("luz")

  const img = document.queryselector(".profile img")

  if (html.classList.contains("luz")) {
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/avatar-luz.png")
  }
}

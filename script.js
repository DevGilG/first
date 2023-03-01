function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains('light')) {
    html.classList.replace('light', 'dark');
  } else if (html.classList.contains('dark')) {
    html.classList.replace('dark', 'light');
  } else {
    html.classList.add('light');
  }
}
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Gilson Guedin sorrindo, de barba, camisa social, blazer e fundo criativo branco no exterior e formas circulares roxas no interior"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Gilson Guedin sorrindo, de barba, camisa social, blazer e fundo criativo roxo escuro gradiente com laranja"
    )
  }


// pode ser substituido por       //
// html.classlist.toggle('light') //

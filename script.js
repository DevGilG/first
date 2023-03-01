function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.replace("light", "dark")
  } else if (html.classList.contains("dark")) {
    html.classList.replace("dark", "light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
// pode ser substituido por       //
// html.classlist.toggle('light') //

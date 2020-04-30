// Light / dark mode section
const modeBtn = document
.querySelector("#light-dark-mode-container")
.addEventListener("click", function () {
  const everything = document.querySelectorAll('*')
  const projectTiles = document.querySelectorAll('.project-tile-overlay');
  everything.forEach((item) => {
    item.classList.toggle('dark');
  });

  projectTiles.forEach((item) => {
    item.classList.remove('dark');
  })
});

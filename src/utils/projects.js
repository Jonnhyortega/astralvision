
function templateCard(object) {
  return `
  <div class="project-tile">
  <span id="proyect-title">${object.name}</span>
  <span id="emoji-animado">👇</span>
  <a
    id="proyect"
    target="_blank"
    href="${object.link}"
  >
    <img
      id="img-project"
      src="${object.img}"
      alt="To do list"
    />
  </a>

  <span id="icons-languages">
    ${renderLanguages(object.language)}
  </span>
</div>
  `;
}

function renderLanguages(array) {
  return array.join("");
}

function renderProjects(array) {
  containerProjects.innerHTML = array.map((p) => templateCard(p)).join("");
}


document.addEventListener("DOMContentLoaded", renderProjects(projects));



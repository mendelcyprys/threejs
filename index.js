const links = [
  {
    name: "Creating a scene",
    link: "exercises/creating_a_scene/creating_a_scene.html",
    tut_link:
      "https://threejs.org/docs/#manual/en/introduction/Creating-a-scene",
  },
  {
    name: "Drawing lines",
    link: "exercises/drawing_lines/drawing_lines.html",
    tut_link: "https://threejs.org/docs/#manual/en/introduction/Drawing-lines",
  },
  {
    name: "Creating text",
    link: "exercises/creating_text/creating_text.html",
    tut_link: "https://threejs.org/docs/#manual/en/introduction/Creating-text",
  },
];
const list_element = document.querySelector("ul");
links.forEach(({ name, link, tut_link }) => {
  list_element.innerHTML += `
    <li>
      <a
        href="${link}"
        target="_blank"
        class="text-orange-700 underline hover:text-orange-500"
      >
        ${name}
      </a>
      - tutorial
      <a
        href="${tut_link}"
        target="_blank"
        class="text-orange-700 underline hover:text-orange-500"
      >
        link
      </a>
    </li>`;
});

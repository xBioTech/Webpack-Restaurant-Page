function createNav() {
  const contentDiv = document.getElementById("content");
  const navDiv = document.createElement("div");
  navDiv.classList.add("nav");
  contentDiv.appendChild(navDiv);

  const unorderedList = document.createElement("ul");
  const listContent = ["Home", "Menu", "Contact"];
  for (let i = 0; i < 3; i++) {
    const listElements = document.createElement("li");
    listElements.textContent = listContent[i];
    listElements.classList.add(listContent[i]);
    unorderedList.appendChild(listElements);
  }
  navDiv.appendChild(unorderedList);
}
export default createNav;

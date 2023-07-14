import footerSvg from "../../assets/wave-blue.svg";

function createFooter() {
  const mainContentDiv = document.querySelector(".main-content");

  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer");
  const footerWave = new Image();
  footerWave.src = footerSvg;
  mainContentDiv.appendChild(footerDiv);
}

export default createFooter;

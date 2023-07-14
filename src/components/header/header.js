import headerLogo from "../../assets/tavern-logo.svg";

function createHeader() {
  const contentDiv = document.getElementById("content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  contentDiv.appendChild(headerDiv);

  const headline = document.createElement("h1");
  headline.textContent = "The Tavern of Legends";
  headline.classList.add("home-headline");

  headerDiv.appendChild(headline);

  const logo = new Image();
  logo.src = headerLogo;
  logo.classList.add("header-logo");
  headerDiv.appendChild(logo);

  return contentDiv;
}

export default createHeader;

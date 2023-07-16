const contentDiv = document.getElementById("content");

function clearMainContent() {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
}

export default clearMainContent;

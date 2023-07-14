import cookImage from "../../assets/cook.png";

function createHome() {
  const contentDiv = document.getElementById("content");
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");
  contentDiv.appendChild(mainContentDiv);

  const mainContentHeadline = document.createElement("h3");
  mainContentHeadline.classList.add("main-content-headline");
  mainContentHeadline.textContent = "Where Heroes Dine!";
  mainContentDiv.appendChild(mainContentHeadline);

  const image = new Image();
  image.src = cookImage;
  image.classList.add("cook");
  mainContentDiv.appendChild(image);

  const cookIntroduction = document.createElement("p");
  cookIntroduction.classList.add("cook-introduction");
  cookIntroduction.textContent =
    "Introducing our green hairy monster cook, a culinary wizard with wild flair! With untamed creativity and a dash of mischief, they whip up spellbinding dishes that ignite the taste buds. Prepare for a flavorful adventure as this hairy beast conjures legendary feasts that will leave you craving more!";
  mainContentDiv.appendChild(cookIntroduction);

  const mainText = document.createElement("p");
  mainText.classList.add("main-text");
  mainText.textContent =
    "Welcome to The Tavern of Legends, where gaming and gastronomy collide in a symphony of flavors. Embark on a culinary quest and feast upon legendary dishes that transcend reality. Immerse yourself in a realm where epicurean delights and gaming bliss intertwine. Join us for an adventure like no other!";
  mainContentDiv.appendChild(mainText);

  return contentDiv;
}
export default createHome;

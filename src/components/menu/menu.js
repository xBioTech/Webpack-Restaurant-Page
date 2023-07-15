import healthBlueImage from "../../assets/health_blue.svg";
import healthEpicImage from "../../assets/health_epic.svg";
import healthLegendaryImage from "../../assets/health-legendary.svg";
import manaBlueImage from "../../assets/mana_blue.svg";
import manaEpicImage from "../../assets/mana_epic.svg";
import manaLegendaryImage from "../../assets/mana_legendary.svg";

function createMenu() {
  const contentDiv = document.getElementById("content");
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");
  contentDiv.appendChild(mainContentDiv);

  const cardHealthBlue = document.createElement("div");
  cardHealthBlue.classList.add("card");
  const hpBlueImg = new Image();
  hpBlueImg.src = healthBlueImage;
  cardHealthBlue.appendChild(hpBlueImg);
  const hpBlueParagraph = document.createElement("p");
  hpBlueParagraph.classList.add("item-attribute-blue");
  hpBlueParagraph.textContent = "Restores 200 Health over 20 seconds";
  cardHealthBlue.appendChild(hpBlueParagraph);
  mainContentDiv.appendChild(cardHealthBlue);

  const cardManaBlue = document.createElement("div");
  cardManaBlue.classList.add("card");
  const mpBlueImg = new Image();
  mpBlueImg.src = manaBlueImage;
  cardManaBlue.appendChild(mpBlueImg);
  const mpBlueParagraph = document.createElement("p");
  mpBlueParagraph.classList.add("item-attribute-blue");
  mpBlueParagraph.textContent = "Restores 200 Mana over 20 seconds";
  cardManaBlue.appendChild(mpBlueParagraph);
  mainContentDiv.appendChild(cardManaBlue);

  const cardHealthEpic = document.createElement("div");
  cardHealthEpic.classList.add("card");
  const hpEpicImg = new Image();
  hpEpicImg.src = healthEpicImage;
  cardHealthEpic.appendChild(hpEpicImg);
  const hpEpicParagraph1 = document.createElement("p");
  hpEpicParagraph1.classList.add("item-attribute-epic");
  hpEpicParagraph1.textContent = "Restores 400 Health over 20 seconds";
  cardHealthEpic.appendChild(hpEpicParagraph1);
  const hpEpicParagraph2 = document.createElement("p");
  hpEpicParagraph2.classList.add("item-attribute-epic");
  hpEpicParagraph2.textContent = "Increases Stamina for 1 hr";
  cardHealthEpic.appendChild(hpEpicParagraph2);
  mainContentDiv.appendChild(cardHealthEpic);

  const cardManaEpic = document.createElement("div");
  cardManaEpic.classList.add("card");
  const mpEpicImg = new Image();
  mpEpicImg.src = manaEpicImage;
  cardManaEpic.appendChild(mpEpicImg);
  const mpEpicParagraph1 = document.createElement("p");
  mpEpicParagraph1.classList.add("item-attribute-epic");
  mpEpicParagraph1.textContent = "Restores 400 Mana over 20 seconds";
  cardManaEpic.appendChild(mpEpicParagraph1);
  const mpEpicParagraph2 = document.createElement("p");
  mpEpicParagraph2.classList.add("item-attribute-epic");
  mpEpicParagraph2.textContent = "Increases Intellect for 1 hr";
  cardManaEpic.appendChild(mpEpicParagraph2);
  mainContentDiv.appendChild(cardManaEpic);

  const cardHealthLegendary = document.createElement("div");
  cardHealthLegendary.classList.add("card");
  const hpLegendaryImg = new Image();
  hpLegendaryImg.src = healthLegendaryImage;
  cardHealthLegendary.appendChild(hpLegendaryImg);
  const hpLegendaryParagraph1 = document.createElement("p");
  hpLegendaryParagraph1.classList.add("item-attribute-legendary");
  hpLegendaryParagraph1.textContent = "Restores 800 Health";
  cardHealthLegendary.appendChild(hpLegendaryParagraph1);
  const hpLegendaryParagraph2 = document.createElement("p");
  hpLegendaryParagraph2.classList.add("item-attribute-legendary");
  hpLegendaryParagraph2.textContent = "Increases Stamina for 2 hr";
  cardHealthLegendary.appendChild(hpLegendaryParagraph2);
  const hpLegendaryParagraph3 = document.createElement("p");
  hpLegendaryParagraph3.classList.add("item-attribute-legendary");
  hpLegendaryParagraph3.textContent = "Increases Physical Damage done by 5%";
  cardHealthLegendary.appendChild(hpLegendaryParagraph3);
  mainContentDiv.appendChild(cardHealthLegendary);

  const cardManaLegendary = document.createElement("div");
  cardManaLegendary.classList.add("card");
  const mpLegendaryImg = new Image();
  mpLegendaryImg.src = manaLegendaryImage;
  cardManaLegendary.appendChild(mpLegendaryImg);
  const mpLegendaryParagraph1 = document.createElement("p");
  mpLegendaryParagraph1.classList.add("item-attribute-legendary");
  mpLegendaryParagraph1.textContent = "Restores 800 Mana";
  cardManaLegendary.appendChild(mpLegendaryParagraph1);
  const mpLegendaryParagraph2 = document.createElement("p");
  mpLegendaryParagraph2.classList.add("item-attribute-legendary");
  mpLegendaryParagraph2.textContent = "Increases Intellect for 2 hr";
  cardManaLegendary.appendChild(mpLegendaryParagraph2);
  const mpLegendaryParagraph3 = document.createElement("p");
  mpLegendaryParagraph3.classList.add("item-attribute-legendary");
  mpLegendaryParagraph3.textContent = "Increases Magical Damage done by 5%";
  cardManaLegendary.appendChild(mpLegendaryParagraph3);
  mainContentDiv.appendChild(cardManaLegendary);
}

export default createMenu;

function createContact() {
  const contentDiv = document.getElementById("content");
  const mainContentDiv = document.createElement("div");

  const contactHeadline = document.createElement("h2");
  contactHeadline.textContent = "Contact Us!";
  contactHeadline.classList.add("contact-us");
  mainContentDiv.appendChild(contactHeadline);

  const phoneDiv = document.createElement("div");

  const phoneCta = document.createElement("h4");
  phoneCta.textContent = "Call us at";
  phoneDiv.appendChild(phoneCta);

  const phoneParagraph = document.createElement("p");
  phoneParagraph.textContent = "+1 (555) 1QUEST1";
  phoneDiv.appendChild(phoneParagraph);
  mainContentDiv.appendChild(phoneDiv);

  const locationDiv = document.createElement("div");

  const locationCta = document.createElement("h4");
  locationCta.textContent = "Or find us here";
  locationDiv.appendChild(locationCta);

  const locationParagraphs = [
    "Street: Dragonfire Lane",
    "postcode: M4G1C5",
    "City: Mythosburg",
  ];

  for (let i = 0; i < 3; i++) {
    const locationP = document.createElement("p");
    locationP.textContent = locationParagraphs[i];
    locationDiv.appendChild(locationP);
  }
  mainContentDiv.appendChild(locationDiv);

  const openingHoursDiv = document.createElement("div");

  const openingHoursHeadline = document.createElement("h4");
  openingHoursHeadline.textContent = "Opening Hours";
  openingHoursDiv.appendChild(openingHoursHeadline);

  const openingParagraphs = [
    "Monday to Friday: 11:00 AM - 11:00 PM",
    "Saturday and Sunday: 10:00 AM - 12:00 AM",
  ];

  for (let i = 0; i < 3; i++) {
    const openingP = document.createElement("p");
    openingP.textContent = openingParagraphs[i];
    openingHoursDiv.appendChild(openingP);
  }

  mainContentDiv.appendChild(openingHoursDiv);

  contentDiv.appendChild(mainContentDiv);
}
export default createContact;

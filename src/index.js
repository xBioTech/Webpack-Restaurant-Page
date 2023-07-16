import "./style.scss";
import "./components/header/style.scss";
import "./components/nav/style.scss";
import "./components/home/style.scss";
import "./components/footer/style.scss";
import "./components/menu/style.scss";
import "./components/contact/style.scss";
import firstPageLoad from "./functions/firstPageLoad";
import clearMainContent from "./functions/clearMainContent";
import createHeader from "./components/header/header";
import createNav from "./components/nav/nav";
import createHome from "./components/home/home";
import createMenu from "./components/menu/menu";
import createContact from "./components/contact/contact";
import createFooter from "./components/footer/footer";

firstPageLoad();

function attachEventListeners() {
  const homeBtn = document.querySelector(".Home");
  const menuBtn = document.querySelector(".Menu");
  const contactBtn = document.querySelector(".Contact");

  homeBtn.addEventListener("click", () => {
    clearMainContent();
    createHeader();
    createNav();
    createHome();
    createFooter();

    attachEventListeners();
  });

  menuBtn.addEventListener("click", () => {
    clearMainContent();
    createHeader();
    createNav();
    createMenu();
    createFooter();

    attachEventListeners();
  });

  contactBtn.addEventListener("click", () => {
    clearMainContent();
    createHeader();
    createNav();
    createContact();
    createFooter();

    attachEventListeners();
  });
}

attachEventListeners();

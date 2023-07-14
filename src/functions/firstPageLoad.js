import createHeader from "../components/header/header.js";
import createNav from "../components/nav/nav.js";
import createHome from "../components/home/home.js";
import createFooter from "../components/footer/footer.js";

function firstPageLoad() {
  createHeader();
  createNav();
  createHome();
  createFooter();
}
export default firstPageLoad;

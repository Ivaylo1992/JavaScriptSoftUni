import { hideAll, showView } from "./utils.js";

const section = document.querySelector("div.container.home");

export function homePage() {
  hideAll();
  showView(section);
}

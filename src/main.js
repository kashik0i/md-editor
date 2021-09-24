//import { Converter } from "showdown";
const textEditor = document.querySelector(".text-editor");
const preview = document.querySelector(".preview");
const converter = new showdown.Converter();

const convert = (event) => {
  const { value } = event.target;
  const html = converter.makeHtml(value);
  preview.innerHTML = html;
};
textEditor.addEventListener("keyup", convert);
textEditor.dispatchEvent(new Event("keyup"));

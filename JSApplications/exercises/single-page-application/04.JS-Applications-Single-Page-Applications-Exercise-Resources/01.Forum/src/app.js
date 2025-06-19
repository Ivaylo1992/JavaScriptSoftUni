import { handleCreate } from "./createTopic.js";

const postsUrl = "http://localhost:3030/jsonstore/collections/myboard/posts";
const createForm = document.querySelector("main form");

createForm.addEventListener(
  "submit",
  handleCreate.bind(null, postsUrl, createForm)
);

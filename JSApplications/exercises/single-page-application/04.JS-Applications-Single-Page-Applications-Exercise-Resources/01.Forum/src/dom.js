const container = document.querySelector(".container");
const section = document.querySelector(".theme-content");
const topics = document.querySelector(".topic-container");
const themeTitle = document.querySelector(".theme-title");
const header = document.querySelector("header");
const userComment = document.querySelector("#user-comment");
const topicName = document.querySelector(".topic-name");

export function createTopicHTML(data) {
  const { title, username, post, date, _id } = data;
  const topic = htmlGenerator("div", "", "topic-name-wraper", topics);
  topic.id = _id;

  const divTopicName = htmlGenerator("div", "", "topic-name", topic);
  const normalA = htmlGenerator("a", "", "normal", divTopicName);
  normalA.setAttribute("href", "#");
  htmlGenerator("h2", title, "", normalA);

  const divColumns = htmlGenerator("div", "", "columns", divTopicName);
  const divOne = htmlGenerator("div", "", "", divColumns);
  const pTag = htmlGenerator("p", "Date", "", divOne);
  htmlGenerator("time", date, "", pTag);

  const divNickname = htmlGenerator("div", "", "nick-name", divOne);
  const pUsername = htmlGenerator("p", "Username: ", "", divNickname);
  htmlGenerator("span", username, "", pUsername);
  return topic;
}

export function createTopicDetailsHTML(topic) {
  const { title, username, post, date, _id } = topic;
  container.replaceChildren(section);

  themeTitle.replaceChild();
  const divThemeTitle = htmlGenerator("div", "", "theme-title", themeTitle);
  divThemeTitle.id = _id;

  const divThemeNameWrapper = htmlGenerator(
    "div",
    "",
    "theme-name-wrapper",
    divThemeTitle
  );

  const divThemeName = htmlGenerator(
    "div",
    "",
    "theme-name",
    divThemeNameWrapper
  );

  htmlGenerator("h2", title, "", divThemeName);

  header.replaceChildren();
  const img = htmlGenerator("img", "", "", header);
  img.setAttribute("src", "./static/profile.png");
  img.setAttribute("alt", "avatar");

  const pTag = htmlGenerator("p", "", "", header);
  pTag.inerHTML = `<span>${username}</span> posted on <time>${date}</time>`;
  htmlGenerator("p", post, "post-content", "header");

  return divThemeTitle;
}

export function createUserCommentHTML(comment) {
  const { content, username, postId, date, _id } = comment;

  const secondPTag = htmlGenerator("p", "", "", topicName);
  secondPTag.innerHTML = `<strong>${username}</strong> commented on <time>${date}</time>`;

  const divPostContent = htmlGenerator("div", "", "post-content", topicName);
  htmlGenerator("p", content, "", divPostContent);
}

function htmlGenerator(type, text, className, parent) {
  const element = document.createElement(type);
  element.textContent = text;

  if (className) {
    element.className = className;
  }

  if (parent) {
    parent.appeChild(element);
  }

  return element;
}

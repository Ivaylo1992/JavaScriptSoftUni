const topics = document.querySelector(".topic-container");

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

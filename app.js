const randomJokes = document.querySelector(".random-jokes");
const btn = document.querySelector("button");

/*btn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/slack")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      randomJokes.innerHTML = data.attachments[0].text;
    });
});*/

btn.addEventListener("click", () => {
  randomJokes.innerHTML = "Loading...";
  setTimeout(() => {
    fetch("https://icanhazdadjoke.com/slack")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        randomJokes.innerHTML = data.attachments[0].text;
      });
  }, 1000);
});

// Initialize
const form = document.querySelector("form");
const memeContainer = document.querySelector("#meme-container");

// listen for submit
document.addEventListener("submit", function (e) {
  e.preventDefault();
  // get values
  let url = document.querySelector("#url-input");
  let topText = document.querySelector("#top-text-input");
  let bottomText = document.querySelector("#bottom-text-input");

  if (url.value != "") {
    // do something with those values
    const meme = document.createElement("div");
    meme.classList.add("meme");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");

    const image = document.createElement("img");
    image.src = `${url.value}`;
    image.addEventListener("click", function (e) {
      console.log(this)
      console.log(e.target)
      e.target.parentElement.parentElement.remove();
    });

    const topTextDiv = document.createElement("div");
    topTextDiv.classList.add("top-text-div");
    topTextDiv.innerText = topText.value;

    const bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList.add("bottom-text-div");
    bottomTextDiv.innerText = bottomText.value;

    imageDiv.appendChild(bottomTextDiv);
    imageDiv.appendChild(topTextDiv);
    imageDiv.appendChild(image);
    meme.appendChild(imageDiv);
    memeContainer.appendChild(meme);

    // reset those values to be ready for another submit event
    url.value = "";
    topText.value = "";
    bottomText.value = "";
  }
});

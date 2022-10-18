console.log("Let's get this party started!");


// element selectors
const navbar = document.querySelector("#navBar");
const textInput = document.getElementById('input');
const submitButton = document.querySelector('#Submitbutton');
const resetButton = document.querySelector('#resetbutton');
const gifArea = document.getElementById('gifs');
const newGifs = document.getElementsByClassName("newGif");

// event listeners
submitButton.addEventListener("click", (i => (console.log(getSearchTerm()))));
resetButton.addEventListener("click", (i => (gifArea.remove(newGifs), textInput.value = '')))


async function getSearchTerm() {
    // in-function variables
    const numGen = Math.floor(Math.random() * 50);
    const img = document.createElement('img');
    const span = document.createElement('span');
    // can I make this line w/params? I know this isnt pretty
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${textInput.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    // get random gif function
    function getRandom(x) {
        const selector = response.data.data[x];
        return selector;
    }
    const gifSelector = getRandom(numGen);
    const gifID = gifSelector.id;
    const gifURL = `https://media4.giphy.com/media/${gifID}/giphy.gif`;
    function insertNewGif() {
        gifArea.prepend(span);
        span.classList.add("newGif");
        span.appendChild(img);
        img.src = gifURL;
        return;
    }
    insertNewGif();
    return response.data;
}

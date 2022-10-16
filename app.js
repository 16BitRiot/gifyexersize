console.log("Let's get this party started!");


// element selectors
const navbar = document.querySelector("#navBar");
const textInput = document.getElementById('input');
const submitButton = document.querySelector('#Submitbutton');
const resetButton = document.querySelector('#resetbutton');

// variables
const testPrint = function(){console.log('hi this is a test')};

// event listeners
submitButton.addEventListener("click", ( i => (console.log(getSearchTerm()))));


async function getSearchTerm () {
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${textInput.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(response);
    return response.data;
}

// ll

testtesttest



// button event listener
// document.body.addEventListener("keypress", function(){
//     if (event.key === "Enter"){
//         console.log(textInput.value);
//         getSearchTerm();
//     }

// });
// function to randomly select a string from an array to use as a quote. //
function randomQuote() {
    // array with strings. //
    const quotes = [
        '"Falling is just another way of flying."',
        '"That smile was like the sun on a hot summer day... with eyes like ice."',
        '"Playing a game by yourself is boring. You need a loser to crush so badly they cant recover."',
    ]
    // randomly calculate which string should be shown. //
    const random = Math.floor(Math.random() * quotes.length);
    // get the element with the specified ID to place the string in. //
    const quote = document.getElementById("randomQuote")
    // place the string in the HTML element. //
    quote.innerHTML = quotes[random]
}

// function to retrieve a random quote from an website.
function randomQuoteAPI() {
    // get the element with the specified ID to place the quote string in. //
    const quote = document.getElementById("randomQuote")
    // get the element wit hthe specified ID to place the author string in. //
    const authorOfQuote = document.getElementById("authorOfQuote")
    // fetch the JSON file from a specified URL.
    fetch('https://api.quotable.io/random')
        // after the fetch, check if it has been fetched correctly, otherwise, throw an error.
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok.')
            }
        // return the JSON as a response
        return response.json();
        })
        // now do something with the data.
        .then((data) => {
            // place the content (quote string) in the HTML element.
            quote.innerHTML = `"${data.content}"`;
            // place the author in the HTML element.
            authorOfQuote.innerHTML = `~ ${data.author}`;
            // add a class to the quote element that will give it an animation.
            quote.className = 'fade_in_quote';
            // add a class to the ahtor element that will give it an animation.
            authorOfQuote.className = 'fade_in_quote';
            // log the JSON file.
            console.log(data)
            // create a timeout, so the quote cannot be skipped for two seconds.
            setTimeout(waitSomeTime, 2000)
        })
        }

// function to create a delay, so the quote cannot be skipped.
function waitSomeTime() {
    // listen for clicks on the page.
    window.addEventListener('click', function() {
        // get the element with the specified ID to change the display of the website
        const randomClickToContinueAddFullPage = document.getElementById('full_page');
        // get the element with the specified ID for the quotes
        const randomClickToContinueRemoveQuote = document.getElementById('randomClickToContinue');
        // add a specified class to the element 'full_page' to make an animation to switch from the quote to the website
        randomClickToContinueAddFullPage.className = 'full_page_animation'
        // add the display style block to the element 'full_page', making the entire website appear
        randomClickToContinueAddFullPage.style.display = 'block'
        // add a specified class to the element 'randomClickToContinue' to make a fade out animation for the quote and author
        randomClickToContinueRemoveQuote.classList.add('remove_quote_animation')
    })
}

// listen for clicks on the entire page
window.addEventListener('load', randomQuoteAPI);


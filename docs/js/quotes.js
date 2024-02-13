function randomQuote() {
    const quotes = [
        '"Falling is just another way of flying."',
        '"That smile was like the sun on a hot summer day... with eyes like ice."',
        '"Playing a game by yourself is boring. You need a loser to crush so badly they cant recover."',
    ]
    
    const random = Math.floor(Math.random() * quotes.length);
    const quote = document.getElementById("randomQuote")
    quote.innerHTML = quotes[random]
}

function randomQuoteAPI() {
    const quote = document.getElementById("randomQuote")
    const authorOfQuote = document.getElementById("authorOfQuote")
    fetch('https://api.quotable.io/random')
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok.')
            }
        return response.json();
        })
        .then((data) => {
            quote.innerHTML = `"${data.content}"`;
            authorOfQuote.innerHTML = `~ ${data.author}`;
            console.log(data)
        })
        }

function waitSomeTime() {
    window.addEventListener('click', function() {
        const randomClickToContinueAddFullPage = document.getElementById('full_page');
        const randomClickToContinueRemoveQuote = document.getElementById('randomClickToContinue');
        randomClickToContinueAddFullPage.style.display = 'block';
        randomClickToContinueRemoveQuote.style.display = 'none';
    })
}

window.addEventListener('load', randomQuoteAPI);
setTimeout(waitSomeTime, 2000)

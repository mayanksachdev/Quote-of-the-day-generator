let quoteButton = document.querySelector('#btn-quote');
let tweetButton = document.querySelector('#btn-tweet')
let quoteDiv = document.querySelector('#div-quote')
let quoteAuthorDiv = document.querySelector('#div-quote-author')


const serverUrl = 'https://api.quotable.io/random'

function fetchRandomQuote() {
    fetch(serverUrl)
        .then(Response => Response.json())
        .then(jsonFile => {
            let newQuote = jsonFile.content;
            let newAuthor = jsonFile.author;
            quoteDiv.innerText = '❝ ' + newQuote + ' ❞'
            quoteAuthorDiv.innerText = '- ' + newAuthor;
        })
}


quoteButton.addEventListener('click', function () {
    fetchRandomQuote()
})
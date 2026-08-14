//variables here

let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let newQuoteBtn = document.getElementById("new-quote");


//array of quotes
const quotes = [
    {
        quote: `"The best way to get started is to quit talking and begin doing."`,
        person: "Walt Disney"
    },
    {
        quote: `"The future belongs to those who believe in the beauty of their dreams."`,
        person: "Eleanor Roosevelt"
    },
    {
        quote: `"It does not matter how slowly you go as long as you do not stop."`,
        person: "Confucius"
    }
];

newQuoteBtn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
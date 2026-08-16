//variables here

let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let newQuoteBtn = document.getElementById("new-quote");



newQuoteBtn.addEventListener("click", async function getQuote() {
    try {
        const controller = new AbortController();
        setTimeout(function(){
            controller.abort();
        }, 3000); // 3 seconds timeout
        let response = await fetch("https://dummyjson.com/quotes/random", {
            signal: controller.signal
        });

        let data = await response.json();

        quote.innerText = data.quote;
        person.innerText = data.author;

        console.log(data);
    } catch (error) {
        quote.innerText = "We could not fetch a new quote at this time.";
        person.innerText = "System Error";
        console.error("An error occurred while fetching the quote:", error);
    }
});
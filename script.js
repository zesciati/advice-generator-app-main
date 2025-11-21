const button = document.querySelector(".button-quote");
const quoteSentence = document.querySelector(".quotes");
const quoteNumber = document.querySelector(".quote-number")

async function getQuote() {
  const quoteAPI = "https://api.adviceslip.com/advice";

  button.disabled = true;
  quoteSentence.style.opacity = 0
  quoteNumber.style.opacity = 0;

  try {
    const res = await fetch(quoteAPI, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch advice");
    }


    const result = await res.json();


    const { id, advice } = result.slip;


    setTimeout(() => {
      quoteSentence.textContent = advice;
      quoteNumber.textContent = id;

      quoteSentence.style.opacity = 1;
      quoteNumber.style.opacity = 1;
    }, 300);

  } catch (error) {
    setTimeout(() => {
      quoteNumber.textContent = "⚠️";
      quoteSentence.textContent = "There is an error, please wait and try again ";

      quoteSentence.style.opacity = 1;
      quoteNumber.style.opacity = 1;
    }, 3000);
  } finally {
    button.disabled = false;
  }
}


button.addEventListener("click", getQuote);

getQuote();


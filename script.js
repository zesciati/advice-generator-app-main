const button = document.querySelector(".button-quote");
const quoteSentence = document.querySelector(".quotes");
const quoteNumber = document.querySelector(".quote-number")

async function getQuote() {
  const quoteAPI = "https://api.adviceslip.com/advice";

  button.disabled = true;
  quoteSentence.style.opacity = 0
  quoteNumber.style.opacity = 0; 

  try{
  const res = await fetch(quoteAPI, {cache: "no-store"});
  const data = await res.json;

  }catch{

  }finally{

  }
}


button.addEventListener("click", getQuote);
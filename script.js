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
  
  if (!res.ok){
    throw new Error("Failed to fetch advice");
  }

  
  const data = await res.json;

  console.log(data);

  // const {id, advice} = data.slip;



  }catch(error){

  }finally{

  }
}


button.addEventListener("click", getQuote);


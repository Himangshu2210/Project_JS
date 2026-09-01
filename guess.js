const targetNumber = Math.floor(Math.random() * 100) + 1;
const form = document.querySelector("form");
const guessObject = [];
const resultParagraph = document.querySelector(".resultParas");
const addResult = ({result, remainingGuesses }) => {
  const newResult = document.createElement("li");
  const guessHistory = guessObject.map((obj) => obj.guess).join(", ");
  newResult.innerHTML = `<div>
                <p>Previous Guesses: ${guessHistory} </p>
                <p>Guesses Remaining: ${remainingGuesses} </p>
                <p class="lowOrHi"> ${result} </p>
            </div>
`;
  if (resultParagraph.firstChild) {
    resultParagraph.replaceChild(newResult, resultParagraph.firstChild);
  } else {
    resultParagraph.appendChild(newResult);
  }
};
let remainingGuesses = 10;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = event.target.guessField.value;
  const guess = parseInt(input, 10);
  // const lowOrHi = document.querySelector(".lowOrHi");

  if (remainingGuesses > 0) {

    if (guess < targetNumber) {
      let object = {
        guess: guess,
        result: "too low",
        remainingGuesses: --remainingGuesses,
      };
      guessObject.push(object);
      addResult(object);
    } else if (guess > targetNumber) {
      let object = {
        guess: guess,
        result: "too high",
        remainingGuesses: --remainingGuesses,
      };
      guessObject.push(object);
      addResult(object);
    } else {
      guessObject.push({
        guess: guess,
        result: "correct",
        remainingGuesses: remainingGuesses,
      });
      addResult({
        guess: guess,
        result: "correct",
        remainingGuesses: remainingGuesses,
      });
    }
  event.target.guessField.value = "";
}
  else {
    alert("No more guesses left!");
    addResult({
      guess: guess,
      result: "No more guesses left!",
      remainingGuesses: remainingGuesses,
    });
  }
});

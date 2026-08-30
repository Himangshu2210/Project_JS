const form = document.querySelector('form');
const colours = ['red', 'orange', 'green'];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let height = parseFloat(event.target.height.value);
  let weight = parseFloat(event.target.weight.value);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 ) {
      document.getElementById('results').textContent = 'Please enter valid numbers for both height and weight.';
      return;
    }
    height = height / 100; // Convert height from cm to meters
    // console.log(height), console.log(weight);
    let bmi = weight / (height * height);
    // console.log(bmi);
    let result =document.getElementById('results');
   let chosenColour = '';
let weightType = '';
    if (bmi < 18.5) {
      chosenColour = colours[1];
        weightType = "Under Weight"
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
      chosenColour = colours[2];
      weightType = "Normal Weight"
    }
    else {
      chosenColour = colours[0];
      weightType = "Over Weight"
    }
    result.innerHTML = `<span>Your BMI is <b style="color: ${chosenColour};">${bmi.toFixed(2)}</b> <br>Your weight Type : ${weightType}</span>`;
})  

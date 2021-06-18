
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// function getCurrentUIValues() {

//     return {
//       amount: +(document.getElementById("loan-amount").value), // does + make the input into an integer
//       years: +(document.getElementById("loan-years").value),
//       rate: +(document.getElementById("loan-rate").value),
//     }

// }


function getCurrentUIValues() {

  let inputAmount = +(document.getElementById("loan-amount").value);
  let inputTerm = +(document.getElementById("loan-years").value);
  let inputRate = +(document.getElementById("loan-rate").value);

  try {
    if (isNaN(inputAmount)) throw "Invalid Loan Amount entry.";
    else if (isNaN(inputTerm) || inputTerm === 0) throw "Invalid Term in Years";
    else if (isNaN(inputRate) || inputRate === 0) throw "Invalid Yearly Rate";
  }
  catch(err) {
    console.log(err);
  }

  return {
    amount: inputAmount,
    years: inputTerm,
    rate: inputRate,
  }

}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  document.getElementById("loan-amount").value = "10000";
  document.getElementById("loan-years").value = "5";
  document.getElementById("loan-rate").value = "6";

  let values = getCurrentUIValues();

  let monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
  return monthlyPayment;

}

// Get the current values from the UI
// Update the monthly payment
function update() {

  let values = getCurrentUIValues();
  let monthlyPaymentString = calculateMonthlyPayment(values);
  updateMonthly(monthlyPaymentString);

}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  // capture values for calculation, ensure values remain floating point values
  let P = values.amount;
  let i = (values.rate/100.0) / 12.0;
  let n = values.years * 12.0;

  // monthly payment calculation
  let monthlyPayment = (P * i) / (1 - (1 + i) ** -n);

  // converts monthly payment to a string with 2 decimal places
  let monthlyPaymentFormatted = monthlyPayment.toFixed(2);

  // updateMonthly(monthlyPaymentString);
  return monthlyPaymentFormatted;
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

  let monthlyPaymentDisplay = document.querySelector("#monthly-payment");
  monthlyPaymentDisplay.innerText = `$${monthly}`;

}

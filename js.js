//need to:
//get value from input, perform formulas, display new result
const celciusInput = document.querySelector('.celsius>input')
const fahrenheitInput = document.querySelector('.fahrenheit>input')
const kelvinInput = document.querySelector('.kelvin>input')
//IF F IS INPUT
//
//F to K
// (f - 32) * 5/9 + 273.15
function convertFahrenheit() {
  kelvinInput.value = (parseFloat(fahrenheitInput.value) - 32) * 5/9 + 273.15;
  celciusInput.value = (parseFloat(fahrenheitInput.value) -32) * 5/9
}
fahrenheitInput.addEventListener('input', convertFahrenheit)
//
//F to C
// (f - 32) * 5/9
function convertCelsius() {
    fahrenheitInput.value = (parseFloat (celsiusInput.value) - 32 * 5/9);
    kelvinInput.value = (parseFloat (celsiusInput.value) - 273.15);
}
celsiusInput.addEventListener('input', convertCelsius)
//IF C IS INPUT
//
//C to K
// c + 273.15
//
//C to F
// (c + 32) * 1.8


//IF K IS INPUT
//
//K to F
// (k + 32) / 5.9
//
//K to C
// k - 273.15


// 23hajkk - 23
// ahghk23ahhkd 23








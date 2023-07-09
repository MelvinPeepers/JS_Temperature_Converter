//need to:
//get value from input, perform formulas, display new result
const celsiusInput = document.querySelector('.celsius>input')
const fahrenheitInput = document.querySelector('.fahrenheit>input')
const kelvinInput = document.querySelector('.kelvin>input')



// Convert Celsius to Fahrenheit and Kelvin
function convertCelsius() {
  fahrenheitInput.value = (parseFloat (celsiusInput.value) * 9/5) + 32;
  kelvinInput.value = parseFloat (celsiusInput.value) + 273.15;
}
celsiusInput.addEventListener('input', convertCelsius)



// Convert Fahrenheit to Celsius and Kelvin
function convertFahrenheit() {
  kelvinInput.value = (parseFloat(fahrenheitInput.value) - 32) * 5/9 + 273.15;
  celsiusInput.value = (parseFloat(fahrenheitInput.value) -32) * 5/9;
}
fahrenheitInput.addEventListener('input', convertFahrenheit)



// Convert Kelvin to Fahrenheit and Celsius
function convertKelvin() {
  fahrenheitInput.value = (parseFloat (kelvinInput.value) - 273.15) * 9/5 + 32;
  celsiusInput.value = parseFloat(kelvinInput.value) - 273.15;
}
kelvinInput.addEventListener('input', convertKelvin)










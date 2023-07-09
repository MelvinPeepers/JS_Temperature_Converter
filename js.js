//! need to: get value from input, perform formulas, display new result
//! selects the input element for Celsius temperature by using the querySelector method with the CSS selector. It assigns the selected element to the celsiusInput constant
const celsiusInput = document.querySelector('.celsius>input')
//! selects the input element for Fahrenheit temperature by using the querySelector method with the CSS selector. It assigns the selected element to the fahrenheitInput constant
const fahrenheitInput = document.querySelector('.fahrenheit>input')
//! selects the input element for Kelvin temperature by using the querySelector method with the CSS selector. It assigns the selected element to the kelvinInput constant
const kelvinInput = document.querySelector('.kelvin>input')



//! Convert Celsius to Fahrenheit and Kelvin
function convertCelsius() {
  fahrenheitInput.value = (parseFloat (celsiusInput.value) * 9/5) + 32;
  kelvinInput.value = parseFloat (celsiusInput.value) + 273.15;
}
//! This line adds an event listener to the Celsius input field. When the user inputs a value, the convertCelsius function will be called, triggering the conversion process.
celsiusInput.addEventListener('input', convertCelsius)



//! Convert Fahrenheit to Celsius and Kelvin
function convertFahrenheit() {
  kelvinInput.value = (parseFloat(fahrenheitInput.value) - 32) * 5/9 + 273.15;
  celsiusInput.value = (parseFloat(fahrenheitInput.value) -32) * 5/9;
}
//! This line adds an event listener to the Fahrenheit input field. When the user inputs a value, the convertFahrenheit function will be called, triggering the conversion process.
fahrenheitInput.addEventListener('input', convertFahrenheit)



//! Convert Kelvin to Fahrenheit and Celsius
function convertKelvin() {
  fahrenheitInput.value = (parseFloat (kelvinInput.value) - 273.15) * 9/5 + 32;
  celsiusInput.value = parseFloat(kelvinInput.value) - 273.15;
}
//! This line adds an event listener to the Kelvin input field. When the user inputs a value, the convertKelvin function will be called, triggering the conversion process.
kelvinInput.addEventListener('input', convertKelvin)










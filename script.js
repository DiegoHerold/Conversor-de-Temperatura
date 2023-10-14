let botao = document.querySelector("#button");
let celcius = document.querySelector("#celcius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin")
let rankine = document.querySelector("#rankine");
let newton = document.querySelector("#newton");
let delisle = document.querySelector("#delisle");
let reaumur = document.querySelector("#reaumur");
let romer = document.querySelector("#romer");

botao.addEventListener("click", function () {
  celcius.value = "";
  fahrenheit.value = "";
  kelvin.value = ""; 
  rankine.value = "";
  newton.value = ""; 
  delisle.value = ""; 
  reaumur.value = ""; 
  romer.value = "";
});
  function ConverterCelsius() {
    
    let Celcius = celcius.value;

    fahrenheit.value = `${(Celcius*1.8)+32}`; //C x 1,8 + 32.
    kelvin.value = `${Celcius-273.15}`; //C + 273,15
    rankine.value = `${(Celcius*1.8)+491.67}`; //C × 1,8 + 491,67
    newton.value = `${Celcius*(33/100)}`; //C × 33/100
    delisle.value = `${(100-Celcius)*1.5}`; //(100 - °C) × 1,5
    reaumur.value = `${Celcius*0.8}`; //°C × 0,8
    romer.value = `${Celcius*(21/40)+7.5}`; //C × 21/40 + 7,5
}
function ConverterFahrenheit() {
    
  let Fahrenheit = fahrenheit.value;
  let Celcius = (Fahrenheit-32)/1.8;

  celcius.value = `${Celcius}`; //C x 1,8 + 32.
  kelvin.value = `${Celcius-273.15}`; //C + 273,15
  rankine.value = `${(Celcius*1.8)+491.67}`; //C × 1,8 + 491,67
  newton.value = `${Celcius*(33/100)}`; //C × 33/100
  delisle.value = `${(100-Celcius)*1.5}`; //(100 - °C) × 1,5
  reaumur.value = `${Celcius*0.8}`; //°C × 0,8
  romer.value = `${Celcius*(21/40)+7.5}`; //C × 21/40 + 7,5
}
function ConverterKelvin() {
    
  let Kelvin = kelvin.value;
  Celcius = Kelvin-273.15;

  fahrenheit.value = `${(Celcius*1.8)+32}`; //C x 1,8 + 32.
  celcius.value = `${Celcius}`; //C + 273,15
  rankine.value = `${(Celcius*1.8)+491.67}`; //C × 1,8 + 491,67
  newton.value = `${Celcius*(33/100)}`; //C × 33/100
  delisle.value = `${(100-Celcius)*1.5}`; //(100 - °C) × 1,5
  reaumur.value = `${Celcius*0.8}`; //°C × 0,8
  romer.value = `${Celcius*(21/40)+7.5}`; //C × 21/40 + 7,5
}
function ConverterRankine() {
  let Rankine = rankine.value;
  let Celcius = Rankine/1.8+273.15; 

  fahrenheit.value = `${(Celcius*1.8)+32}`; //C x 1,8 + 32.
  kelvin.value = `${Celcius-273.15}`; //C + 273,15
  celcius.value = `${Celcius}`; //C × 1,8 + 491,67
  newton.value = `${Celcius*(33/100)}`; //C × 33/100
  delisle.value = `${(100-Celcius)*1.5}`; //(100 - °C) × 1,5
  reaumur.value = `${Celcius*0.8}`; //°C × 0,8
  romer.value = `${Celcius*(21/40)+7.5}`; //C × 21/40 + 7,5
}
function ConverterNewton() {
    
  let Newton = newton.value;
  Celcius = Newton*(100/33);

  fahrenheit.value = `${(Celcius*1.8)+32}`; //C x 1,8 + 32.
  kelvin.value = `${Celcius-273.15}`; //C + 273,15
  rankine.value = `${(Celcius*1.8)+491.67}`; //C × 1,8 + 491,67
  celcius.value = `${Celcius}`; //C × 33/100
  delisle.value = `${(100-Celcius)*1.5}`; //(100 - °C) × 1,5
  reaumur.value = `${Celcius*0.8}`; //°C × 0,8
  romer.value = `${Celcius*(21/40)+7.5}`; //C × 21/40 + 7,5
}
function ConverterDelisle() {
  let Delisle = delisle.value;
  let Celcius = 100-(Delisle/1.5);

  fahrenheit.value = `${(Celcius*1.8)+32}`; //C x 1,8 + 32.
  kelvin.value = `${Celcius-273.15}`; //C + 273,15
  rankine.value = `${(Celcius*1.8)+491.67}`; //C × 1,8 + 491,67
  newton.value = `${Celcius*(33/100)}`; //C × 33/100
  celcius.value = `${Celcius}`; //(100 - °C) × 1,5
  reaumur.value = `${Celcius*0.8}`; //°C × 0,8
  romer.value = `${Celcius*(21/40)+7.5}`; //C × 21/40 + 7,5
}
function ConverterReaumur() {
    
  let Reamur = reaumur.value;
  let Celcius = Reamur/0.8;

  fahrenheit.value = `${(Celcius*1.8)+32}`; //C x 1,8 + 32.
  kelvin.value = `${Celcius-273.15}`; //C + 273,15
  rankine.value = `${(Celcius*1.8)+491.67}`; //C × 1,8 + 491,67
  newton.value = `${Celcius*(33/100)}`; //C × 33/100
  delisle.value = `${(100-Celcius)*1.5}`; //(100 - °C) × 1,5
  celcius.value = `${Celcius}`; //°C × 0,8
  romer.value = `${Celcius*(21/40)+7.5}`; //C × 21/40 + 7,5
}
function ConverterRomer() {
    
  let Romer = romer.value;
  let Celcius = (Romer-7.5)*(40/21);

  fahrenheit.value = `${(Celcius*1.8)+32}`; //C x 1,8 + 32.
  kelvin.value = `${Celcius-273.15}`; //C + 273,15
  rankine.value = `${(Celcius*1.8)+491.67}`; //C × 1,8 + 491,67
  newton.value = `${Celcius*(33/100)}`; //C × 33/100
  delisle.value = `${(100-Celcius)*1.5}`; //(100 - °C) × 1,5
  reaumur.value = `${Celcius*0.8}`; //°C × 0,8
  celcius.value = `${Celcius}`; //C × 21/40 + 7,5
}
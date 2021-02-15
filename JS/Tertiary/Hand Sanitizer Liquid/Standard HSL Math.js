/* --------------- Parameters --------------- */
// Densities
var alcoholDensity = 730;
var waterDensity = 1000;
var peroxideDensity = 1000;
var glycerineDensity = 1240;
/* --------------- Input Functions --------------- */
// Input Function
function Input(input, factor) {
  var input;
  var factor;
  var result = input * factor;
  return result.toFixed(2);
}
// Ounces Function
function OZ(input) {
  var input;
  var result = input / 28.35;
  return result.toFixed(2);
}
// Grams Function
function Grams(input) {
  var input;
  var result = input * 28.35;
  return result.toFixed(2);
}
// Fluid Ounces
function FOZ(input) {
  var input;
  var result = input / 29.5735;
  return result.toFixed(2);
}
// Milliliters Function
function ML(input) {
  var input;
  var result = input * 29.5735;
  return result.toFixed(2);
}
// Teaspoons Function
function TSP(input) {
  var input;
  var result = input * 6;
  return result.toFixed(2);
}
// To grams from mL Function
function toGrams(density, milli) {
  var density;
  var milli;
  var result = (density * milli) / 1000;
  return result.toFixed(2);
}
// To mL from grams Function
function toMilli(density, grams) {
  var density;
  var grams;
  var result = (grams / density) * 1000;
  return result.toFixed(2);
}
/* -------------------- Ingredient Functions -------------------- */
function Ingredients(){
  /* --------------- Alcohol --------------- */
  // Input and Scale Factor
  var input = document.getElementById("batch").value;
  var scaleFactor = input;
  // Milliliters (mL)
  var alcomL = Input(7515, scaleFactor);
  document.getElementById("ALmL").innerHTML = alcomL;
  // Fluid Ounces (FOz)
  var alcoFOz = FOZ(alcomL);
  document.getElementById("ALFOz").innerHTML = alcoFOz;
  // Teaspoons (tsp)
  var alcotsp = TSP(alcoFOz);
  document.getElementById("ALtsp").innerHTML = alcotsp;
  // Grams (g)
  var alcog = toGrams(alcoholDensity, alcomL);
  document.getElementById("ALg").innerHTML = alcog;
  // Ounces (Oz)
  var alcoOz = OZ(alcog);
  document.getElementById("ALOz").innerHTML = alcoOz;
  /* --------------- Distilled Water --------------- */
  // Milliliters (mL)
  var watrmL = Input(1995.50, scaleFactor);
  document.getElementById("WATRmL").innerHTML = watrmL;
  // Fluid Ounces (FOz)
  var watrFOz = FOZ(watrmL);
  document.getElementById("WATRFOz").innerHTML = watrFOz;
  // Teaspoons (tsp)
  var watrtsp = TSP(watrFOz);
  document.getElementById("WATRtsp").innerHTML = watrtsp;
  // Grams (g)
  var watrg = toGrams(waterDensity, watrmL);
  document.getElementById("WATRg").innerHTML = watrg;
  // Ounces (Oz)
  var watrOz = OZ(watrg);
  document.getElementById("WATROz").innerHTML = watrOz;
  /* --------------- Peroxide --------------- */
  // Milliliters (mL)
  var peromL = Input(417, scaleFactor);
  document.getElementById("PEROmL").innerHTML = peromL;
  // Fluid Ounces (FOz)
  var peroFOz = FOZ(peromL);
  document.getElementById("PEROFOz").innerHTML = peroFOz;
  // Teaspoons (tsp)
  var perotsp = TSP(peroFOz);
  document.getElementById("PEROtsp").innerHTML = perotsp;
  // Grams (g)
  var perog = toGrams(peroxideDensity, peromL);
  document.getElementById("PEROg").innerHTML = perog;
  // Ounces (Oz)
  var peroOz = OZ(perog);
  document.getElementById("PEROOz").innerHTML = peroOz;
  /* --------------- Glycerine --------------- */
  // Milliliters (mL)
  var glycmL = Input(72.50, scaleFactor);
  document.getElementById("GLYCmL").innerHTML = glycmL;
  // Fluid Ounces (FOz)
  var glycFOz = FOZ(glycmL);
  document.getElementById("GLYCFOz").innerHTML = glycFOz;
  // Teaspoons (tsp)
  var glyctsp = TSP(glycFOz);
  document.getElementById("GLYCtsp").innerHTML = glyctsp;
  // Grams (g)
  var glycg = toGrams(glycerineDensity, glycmL);
  document.getElementById("GLYCg").innerHTML = glycg;
  // Ounces (Oz)
  var glycOz = OZ(glycg);
  document.getElementById("GLYCOz").innerHTML = glycOz;
  /* --------------- Total --------------- */
  // Total Ounces
  var grandTotalOz = parseFloat(alcoOz) + parseFloat(watrOz) + parseFloat(peroOz)
                   + parseFloat(glycOz);
  var grandTotalOzF = grandTotalOz.toFixed(2);
  document.getElementById("TTOz").innerHTML = grandTotalOzF;
  // Total Grams
  var grandTotalg = Grams(grandTotalOz);
  document.getElementById("TTg").innerHTML = grandTotalg;
  // Total Milliliters
  var grandTotalmL = parseFloat(alcomL) + parseFloat(watrmL) + parseFloat(peromL)
                   + parseFloat(glycmL);
  var grandTotalmLF = grandTotalmL.toFixed(2);
  document.getElementById("TTmL").innerHTML = grandTotalmLF;
  // Total Fluid Ounces
  var grandTotalFOz = FOZ(grandTotalmL);
  document.getElementById("TTFOz").innerHTML = grandTotalFOz;
  // Total Teaspoons
  var grandTotaltsp = TSP(grandTotalFOz);
  document.getElementById("TTtsp").innerHTML = grandTotaltsp;
}

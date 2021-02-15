/* --------------- Parameters --------------- */
// Densities
var alcoholDensity = 730;
var waterDensity = 1000;
var glycerineDensity = 1240;
var carbomerDensity = 170.42;
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
// Drops Function
function DPS(input) {
  var input;
  var result = input * 20;
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
  var alcomL = Input(1750, scaleFactor);
  document.getElementById("ALmL").innerHTML = alcomL;
  // Fluid Ounces (FOz)
  var alcoFOz = FOZ(alcomL);
  document.getElementById("ALFOz").innerHTML = alcoFOz;
  // Drops (dps)
  var alcodps = DPS(alcomL);
  document.getElementById("ALdps").innerHTML = alcodps;
  // Grams (g)
  var alcog = toGrams(alcoholDensity, alcomL);
  document.getElementById("ALg").innerHTML = alcog;
  // Ounces (Oz)
  var alcoOz = OZ(alcog);
  document.getElementById("ALOz").innerHTML = alcoOz;
  /* --------------- Distilled Water --------------- */
  // Milliliters (mL)
  var watrmL = Input(650, scaleFactor);
  document.getElementById("WAmL").innerHTML = watrmL;
  // Fluid Ounces (FOz)
  var watrFOz = FOZ(watrmL);
  document.getElementById("WAFOz").innerHTML = watrFOz;
  // Drops (dps)
  var watrdps = DPS(watrmL);
  document.getElementById("WAdps").innerHTML = watrdps;
  // Grams (g)
  var watrg = toGrams(waterDensity, watrmL);
  document.getElementById("WAg").innerHTML = watrg;
  // Ounces (Oz)
  var watrOz = OZ(watrg);
  document.getElementById("WAOz").innerHTML = watrOz;
  /* --------------- Glycerine --------------- */
  // Milliliters (mL)
  var glymL = Input(75, scaleFactor);
  document.getElementById("GYmL").innerHTML = glymL;
  // Fluid Ounces (FOz)
  var glyFOz = FOZ(glymL);
  document.getElementById("GYFOz").innerHTML = glyFOz;
  // Drops (dps)
  var glydps = DPS(glymL);
  document.getElementById("GYdps").innerHTML = glydps;
  // Grams (g)
  var glyg = toGrams(glycerineDensity, glymL);
  document.getElementById("GYg").innerHTML = glyg;
  // Ounces (Oz)
  var glyOz = OZ(glyg);
  document.getElementById("GYOz").innerHTML = glyOz;
  /* --------------- Carbomer 940 --------------- */
  // Milliliters (mL)
  var cb9mL = Input(73.35, scaleFactor);
  document.getElementById("CB9mL").innerHTML = cb9mL;
  // Fluid Ounces (FOz)
  var cb9FOz = FOZ(cb9mL);
  document.getElementById("CB9FOz").innerHTML = cb9FOz;
  // Drops (dps)
  var cb9dps = DPS(cb9mL);
  document.getElementById("CB9dps").innerHTML = cb9dps;
  // Grams (g)
  var cb9g = toGrams(carbomerDensity, cb9mL);
  document.getElementById("CB9g").innerHTML = cb9g;
  // Ounces (Oz)
  var cb9Oz = OZ(cb9g);
  document.getElementById("CB9Oz").innerHTML = cb9Oz;
  /* --------------- TEA --------------- */
  // Drops (dps)
  var teadps = Input(25, scaleFactor);
  document.getElementById("TEAdps").innerHTML = teadps;
  // Milliliters (mL)
  var teamL = parseFloat(teadps) / 20;
  document.getElementById("TEAmL").innerHTML = teamL.toFixed(2);
  // Fluid Ounces (FOz)
  var teaFOz = FOZ(teamL);
  document.getElementById("TEAFOz").innerHTML = teaFOz;
  // Grams (g)
  var teag = teamL;
  document.getElementById("TEAg").innerHTML = teamL.toFixed(2);
  // Ounces (Oz)
  var teaOz = OZ(teag);
  document.getElementById("TEAOz").innerHTML = teaOz;
  /* --------------- Total --------------- */
  // Total Ounces
  var grandTotalOz = parseFloat(alcoOz) + parseFloat(watrOz) + parseFloat(glyOz)
                   + parseFloat(cb9Oz) + parseFloat(teaOz);
  var grandTotalOzF = grandTotalOz.toFixed(2);
  document.getElementById("TTOz").innerHTML = grandTotalOzF;
  // Total Grams
  var grandTotalg = Grams(grandTotalOz);
  document.getElementById("TTg").innerHTML = grandTotalg;
  // Total Milliliters
  var grandTotalmL = parseFloat(alcomL) + parseFloat(watrmL) + parseFloat(glymL)
                   + parseFloat(cb9mL) + parseFloat(teamL);
  var grandTotalmLF = grandTotalmL.toFixed(2);
  document.getElementById("TTmL").innerHTML = grandTotalmLF;
  // Total Fluid Ounces
  var grandTotalFOz = FOZ(grandTotalmL);
  document.getElementById("TTFOz").innerHTML = grandTotalFOz;
  // Total Drops
  var grandTotaldps = DPS(grandTotalmL);
  document.getElementById("TTdps").innerHTML = grandTotaldps;
}

/* --------------- Parameters --------------- */
// Densities
var ingr1Density = 950.00;
var ingr2Density = 925.00;
var ingr3Density = 900.00;
var focusedDensity = 500.00;
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
// Drops Function Function
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
/* --------------- Focused Ingredient Calculation --------------- */
// Focused Calc
function FOCcalc(desired, purity, total) {
  var desired;
  var purity;
  var total;
  // Returns grams of FOC
  var cbx = (1 / purity) * ((desired * total) / (1 - (desired / 28.35)));
  return cbx.toFixed(2);
}
/* -------------------- Ingredient Functions -------------------- */
function Ingredients(){
  /* --------------- INGR1 --------------- */
  // Input and Scale Factor
  var input = document.getElementById("batch").value;
  var scaleFactor = input;
  // Milliliters (mL)
  var ingr1mL = Input(1000, scaleFactor);
  document.getElementById("INGR1mL").innerHTML = ingr1mL;
  // Fluid Ounces (FOz)
  var ingr1FOz = FOZ(ingr1mL);
  document.getElementById("INGR1FOz").innerHTML = ingr1FOz;
  // Drops (Dps)
  var ingr1dps = DPS(ingr1mL);
  document.getElementById("INGR1dps").innerHTML = ingr1dps;
  // Grams (g)
  var ingr1g = toGrams(ingr1Density, ingr1mL);
  document.getElementById("INGR1g").innerHTML = ingr1g;
  // Ounces (Oz)
  var ingr1Oz = OZ(ingr1g);
  document.getElementById("INGR1Oz").innerHTML = ingr1Oz;
  /* --------------- INGR2 --------------- */
  // Milliliters (mL)
  var ingr2mL = Input(800, scaleFactor);
  document.getElementById("INGR2mL").innerHTML = ingr2mL;
  // Fluid Ounces (FOz)
  var ingr2FOz = FOZ(ingr2mL);
  document.getElementById("INGR2FOz").innerHTML = ingr2FOz;
  // Drops (Dps)
  var ingr2dps = DPS(ingr2mL);
  document.getElementById("INGR2dps").innerHTML = ingr2dps;
  // Grams (g)
  var ingr2g = toGrams(ingr2Density, ingr2mL);
  document.getElementById("INGR2g").innerHTML = ingr2g;
  // Ounces (Oz)
  var ingr2Oz = OZ(ingr2g);
  document.getElementById("INGR2Oz").innerHTML = ingr2Oz;
  /* --------------- INGR 3 --------------- */
  // Milliliters (mL)
  var ingr3mL = Input(600, scaleFactor);
  document.getElementById("INGR3mL").innerHTML = ingr3mL;
  // Fluid Ounces (FOz)
  var ingr3FOz = FOZ(ingr3mL);
  document.getElementById("INGR3FOz").innerHTML = ingr3FOz;
  // Drops (Dps)
  var ingr3dps = DPS(ingr3mL);
  document.getElementById("INGR3dps").innerHTML = ingr3dps;
  // Grams (g)
  var ingr3g = toGrams(ingr3Density, ingr3mL);
  document.getElementById("INGR3g").innerHTML = ingr3g;
  // Ounces (Oz)
  var ingr3Oz = OZ(ingr3g);
  document.getElementById("INGR3Oz").innerHTML = ingr3Oz;
  /* --------------- Focused --------------- */
  // Purity and Desired
  var purity = document.getElementById("purity").value;
  var desired = document.getElementById("desired").value;
  purity /= 100;
  desired /= 1000;
  // Other Variables
  var totalOther = parseFloat(ingr1Oz) + parseFloat(ingr2Oz) + parseFloat(ingr3Oz);
  // Grams
  var focg = FOCcalc(desired, purity, totalOther);
  document.getElementById("FOCg").innerHTML = focg;
  // Ounces
  var focOz = OZ(focg);
  document.getElementById("FOCOz").innerHTML = focOz;
  // Milliliters
  var focmL = toMilli(focusedDensity, focg);
  document.getElementById("FOCmL").innerHTML = focmL;
  // Fluid Ounces
  var focFOz = FOZ(focmL);
  document.getElementById("FOCFOz").innerHTML = focFOz;
  // Drops
  var focdps = DPS(focmL);
  document.getElementById("FOCtsp").innerHTML = focdps;
  /* --------------- Total --------------- */
  // Total Ounces
  var grandTotalOz = totalOther + parseFloat(focOz);
  var grandTotalOzF = grandTotalOz.toFixed(2);
  document.getElementById("TTOz").innerHTML = grandTotalOzF;
  // Total Grams
  var grandTotalg = Grams(grandTotalOz);
  document.getElementById("TTg").innerHTML = grandTotalg;
  // Total Milliliters
  var grandTotalmL = parseFloat(ingr1mL) + parseFloat(ingr2mL) + parseFloat(ingr3mL);
  var grandTotalmLF = grandTotalmL.toFixed(2);
  document.getElementById("TTmL").innerHTML = grandTotalmLF;
  // Total Fluid Ounces
  var grandTotalFOz = FOZ(grandTotalmL);
  document.getElementById("TTFOz").innerHTML = grandTotalFOz;
  // Total Drops
  var grandTotaldps = DPS(grandTotalmL);
  document.getElementById("TTtsp").innerHTML = grandTotaldps;
}

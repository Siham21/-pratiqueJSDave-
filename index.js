function perimetreSquare(côté) {
  const resultatPerimetreSquare = côté * 4;
  return resultatPerimetreSquare;
}

// function airSquare(côté) {
//   const resultatAirSquare = côté * côté;
//   return resultatAirSquare;
// }

// function perimetreTriangle(côté1, côté2, côté3) {
//   const resultatPerimetreTriangle = côté1 + côté2 + côté3;
//   return resultatPerimetreTriangle;
// }
// function airtriangle(côté, hauteur) {
//   const resultatAirTriangle = (côté * hauteur) / 2;
//   return resultatAirTriangle;
// }
function perimeterButtonSquare() {
  const input = document.getElementById("sideSquare");

  const value = input.value;
  console.log(value);
  const perimetre = perimetreSquare(value);

  document.getElementById("resultatSquare").innerHTML = perimetre;
}

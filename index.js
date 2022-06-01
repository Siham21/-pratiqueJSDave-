// Fonction de calcul
function perimetreSquare(côté) {
  const resultatPerimetreSquare = côté * 4;
  return resultatPerimetreSquare;
}

function airSquare(côté) {
  const resultatAirSquare = côté * côté;
  return resultatAirSquare;
}

function perimetreTriangle(côté1, côté2, côté3) {
  const resultatPerimetreTriangle = côté1 + côté2 + côté3;
  return resultatPerimetreTriangle;
}
function airTriangle(côté, hauteur) {
  const resultatAirTriangle = (côté * hauteur) / 2;
  return resultatAirTriangle;
}

// Fonction d'affichage des bouttons

function perimeterButtonSquare() {
  const input = document.getElementById("sideSquare");

  const value = input.value;
  console.log(value);
  const perimetre = perimetreSquare(value);

  document.getElementById("resultatSquare").innerHTML =
    "Le périmètre du carré est : " + perimetre;
}

function airButtonSquare() {
  const input = document.getElementById("sideSquare");
  const value = input.value;
  const air = airSquare(value);

  document.getElementById(
    "resultatSquare1"
  ).innerHTML = `L'air du carré est : ${air}`;
}

function perimeterButtonTriangle() {
  const input1 = document.getElementById("sideTriangleBase1");
  const input2 = document.getElementById("sideTriangle2");
  const input3 = document.getElementById("sideTriangle3");
  const value = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const perimetre = perimetreTriangle(value, value2, value3);

  document.getElementById("resultatTriangle1").innerHTML =
    "Le périmètre du triangle est :" + perimetre;
}

function airButtonTriangle() {
  const input1 = document.getElementById("sideTriangleBase1");
  const input2 = document.getElementById("hauteurTriangle");
  const value = input1.value;
  const value2 = input2.value;
  const air = airTriangle(value, value2);

  document.getElementById(
    "resultatTriangle2"
  ).innerHTML = `L'air du triangle est : ${air}`;
}

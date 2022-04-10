function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");

const modalbg2 = document.getElementById("modal2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.forEach(item => item.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function launchModal2() {
  modalbg2.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}

function closeModal2(){
  modalbg.style.display = "none";
}

//Récupération des elements du formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const gamesPlayed = document.getElementById("quantity")
const villeLocation = document.getElementsByName("location")
const checkBox = document.getElementById("checkbox1")

//@TODO Créer des méthode de vérification pour chaque type de champ
function functFirstName() {
  const errorFirstName = document.getElementById("erreur-firstname");
  const regexLetters = new RegExp(/^[A-Za-z-]+$/);
  if (!firstName.value) {
    errorFirstName.innerHTML = "Les renseignements sont non valides, merci de bien vouloir saisir votre Prénom";
    errorFirstName.style.display = "block";
    return false;
  } else if (firstName.value.length < 2) {
    errorFirstName.innerHTML = "Merci de saisir au minimum 2 caractères";
    errorFirstName.style.display = "block";
    return false;
  } else if (!regexLetters.test(firstName.value)) {
    errorFirstName.innerHTML = "Merci d'utiliser uniquement des caractéres alphanumériques et saisir (-) pour les prénoms composés";
    errorFirstName.style.display = "block";
    return false;
  } else {
    errorFirstName.style.display = "none";
    return true;
  }
}

function functLastName() {
  const errorLastName = document.getElementById("erreur-lastname");
  const regexLetters = new RegExp(/^[A-Za-z-]+$/);
  if (!lastName.value) {
    errorLastName.innerHTML = "Les renseignements sont non valides, merci de bien vouloir saisir votre Nom";
    errorLastName.style.display = "block";
    return false;
  } else if (lastName.value.length < 2) {
    errorLastName.innerHTML = "Merci de saisir au minimum 2 caractères";
    errorLastName.style.display = "block";
    return false;
  } else if (!regexLetters.test(lastName.value)) {
    errorLastName.innerHTML = "Merci d'utiliser uniquement des caractéres alphanumériques et saisir (-) pour les prénoms composés";
    errorLastName.style.display = "block";
    return false;
  } else {
    errorLastName.style.display = "none";
    return true;
  }
}

function functEmail() {
  const errorEmail = document.getElementById("erreur-email");
  const regexEmail = new RegExp(/\S+@\S+\.\S+/);
  if (!email.value) {
    errorEmail.innerHTML = "Les renseignements sont non valides, merci de bien vouloir saisir votre email";
    errorEmail.style.display = "block";
    return false;
  } else if (!regexEmail.test(email.value)) {
    errorEmail.innerHTML = "Merci de bien vouloir saisir un email valide";
    errorEmail.style.display = "block";
    return false;
  } else {
    errorEmail.style.display = "none";
    return true;
  }
}

function functBirthDate() {
  const errorBirthdate = document.getElementById("erreur-birthdate");
  if (!birthdate.value) {
    errorBirthdate.innerHTML = "Merci de bien vouloir renseigner votre date d'anniversaire";
    errorBirthdate.style.display = "block";
    return false;
  } else {
    errorBirthdate.style.display = "none";
    return true;
  }
}

function functGamesPlayed() {
  const errorGamesPlayed = document.getElementById("erreur-gamesplayed");
  const regexGamesPlayed = new RegExp("^[0-9][0-9]?$|^99$");
  if (!gamesPlayed.value) {
    errorGamesPlayed.innerHTML = "Merci de bien vouloir renseigner votre nombre de participation";
    errorGamesPlayed.style.display = "block";
    return false;
  } else if (!regexGamesPlayed.test(gamesPlayed.value)) {
    errorGamesPlayed.innerHTML = "Les renseignements sont non valides, merci de bien vouloir renseigner un nombre compris entre 0 et 99";
    errorGamesPlayed.style.display = "block";
    return false;
  } else {
    errorGamesPlayed.style.display = "none";
    return true;
  }
}

function functVilleLocation() {
  const errorVilleLocation = document.getElementById("erreur-location");
  const result = Array.from(villeLocation).filter((ville) => ville.checked === true);
  if (result.length <= 0) {
    errorVilleLocation.innerHTML = "Merci de bien vouloir renseigner une ville";
    errorVilleLocation.style.display = "block";
    return false;
  } else {
    errorVilleLocation.style.display = "none";
    return true;
  }
}

function functCheckBox() {
  const errorCheckBox = document.getElementById("erreur-checkbox");
  if (!checkBox.checked) {
    errorCheckBox.innerHTML = "Merci de bien vouloir accepter les conditions d'utilisation";
    errorCheckBox.style.display = "block";
    return false;
  } else {
    errorCheckBox.style.display = "none";
    return true;
  }
}

function confirmationModal() {
  launchModal2();
}

// Main validate methode
function validate() {

  //@TODO Ajouter ici toutes les vérifications
  var allFunctionsAreOk = true;

  if (!functFirstName()){
    allFunctionsAreOk = false;
  }
  if (!functLastName()){
    allFunctionsAreOk = false;
  }
  if (!functEmail()){
    allFunctionsAreOk = false;
  }
  if (!functBirthDate()){
    allFunctionsAreOk = false;
  }
  if (!functGamesPlayed()){
    allFunctionsAreOk = false;
  }
  if (!functVilleLocation()){
    allFunctionsAreOk = false;
  }
  if (!functCheckBox()){
    allFunctionsAreOk = false;
  }
  if (allFunctionsAreOk){
    //@TODO Vider le formulaire

    //@TODO Fermer ce formulaire si tout est valide
    closeModal();
    //@TODO Afficher le modal de confirmation
    confirmationModal();
  } return false;
}
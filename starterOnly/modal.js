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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.forEach(item => item.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}

//Récupération des elements du formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");

//@TODO Créer des méthode de vérification pour chaque type de champ
function formFirstName() {
  const errorFirstName = document.getElementById("erreur_firstname");
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
    return false
  } else {
    errorFirstName.style.display = "none";
    return true;
  }
}

function formLastName() {
  const errorLastName = document.getElementById("erreur_lastname");
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
    return false
  }else {
    errorLastName.style.display = "none";
    return true;
  }
}

function formEmail() {
  const errorEmail = document.getElementById("erreur_email");
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

// Main validate methode
function validate(){
  console.log("Formulaire submitté");
  //@TODO Ajouter ici tous les vérifications

  //@TODO Vider le formulaire

  //@TODO Fermer ce formulaire si tous est valide
  closeModal();

  //@TODO Afficher le modal de confirmation

  return false;
}
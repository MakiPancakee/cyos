// ################################################################################################################### HASH ON LOAD
if (document.location.hash != "#eng" ){
  location.hash = "#fr";
} else {
  location.hash = "#eng";
}
// ############################################################################################################# DISAPPEAR & CHEATS
// When click on the button, the input and background disappear without changing page
function validInput() {
  var x = document.getElementById("newusername").value;
  document.getElementById("showname").innerHTML = x + ",";
  document.getElementById("disappear").style.display = "none";
};

// it's clearly a cheat for html purpose
document.getElementById("restartbutton").style.visibility = "hidden";
document.getElementById("notvisible").style.visibility = "hidden";
document.getElementById("last_restart").style.visibility = "hidden";


// ############################################################################################################## BACKGROUND CHANGE
// Change the background for the story screen -----------------------------------------------------
function bgChange1() {
  document.getElementById("bgChange").style.backgroundImage =
    "url('img/pattern1.jpeg')";
};

function bgChange2() {
  document.getElementById("bgChange").style.backgroundImage =
    "url('img/pattern2.jpeg')";
};

function bgChange3() {
  document.getElementById("bgChange").style.backgroundImage =
    "url('img/pattern3.jpeg')";
};

function bgChange4() {
  document.getElementById("bgChange").style.backgroundImage =
    "url('img/pattern4.jpeg')";
};

// ####################################################################################################################### LANGUAGE

// Change language ---------------------------------------------------------------------------------
// Create a function to change the hash value of the page
function lgChange(lang) {
  location.hash = lang;
  location.reload();
};

// ########################################################################################################################## EN/FR

// Define the language reload anchors
var language = {
  eng: {
    title1: "Insert your name here :)",
    submit_button: "Start the story !",
    skip_button: "Skip the text animation",
    stop_button: "Click here if don't want to go further...",
    restartbutton: "Restart",
    first_step:
      "The story you will read today is about a 24-years-old passionnate girl whose name is Mathilde. Her head is filled with dreams and stories, worlds which are unexplored and unsolved cases, which drove her to developp a huge interest in writing and reading. She became interested in digital technology, and more particularly in web development after studying Japanese and decided to make it her future career. She is a beginner but she is eager to learn. She never stops persevering, even in front of the most persistent bugs.",
    last_step:
      "Well, now you know. You know who she is, what she loves, and why she won't be a wrong choice. Will you believe in her ?",
    skip_last:"Skip the text animation",
    celebrate:"You do ?",
    sad:"You don't ?",
  },
  fr: {
    title1: "Entrez votre prénom ici :)",
    submit_button: "Commencer l'histoire !",
    skip_button: "Passer l'animation du texte",
    stop_button: "Cliquez ici si vous ne voulez pas aller plus loin...",
    restartbutton: "Recommencer",
    first_step:
      "L'histoire que je vais vous conter aujourd'hui n'est autre que l'histoire d'une jeune fille passionnée de 24 ans qui s'appelle Mathilde. Elle a la tête pleine de rêves et d'histoires, de mondes à découvrir et d'enquêtes à elucider, ce qui l'a conduite à développer un intérêt infini pour l'écriture et la lecture. Elle a commencé à s'intéresser au numérique, et plus particulièrement au développement web après avoir fait des études de japonais et décide d'en faire sa future carrière. Elle est débutante mais elle a soif d'apprendre. Elle ne cesse de persevérer, même face aux bugs les plus persistants.",
    last_step:
      "Maintenant vous savez. Vous savez qui elle est, ce qu'elle aime et pourquoi elle ne serait pas un mauvais choix. Est-ce que vous allez lui faire confiance ?",
    skip_last:"Passer l'animation du texte",
    celebrate:"C'est un oui ?",
    sad:"C'est un non ?",
  },
};

// ######################################################################################################## TYPEWRITER FIRST EFFECT

// setting up TypeWriter for first_step text effect------------------------------------------------------------
var first_step = document.getElementById("first_step");

var typewriter = new Typewriter(first_step, {
  loop: false,
  delay: 45,
});

// Button to skip typewriter animation---------------------------------------------------------------
function skip() {
  document.getElementById("skip_button");
  if (window.location.hash == "#fr") {
    typewriter.stop();
    first_step.textContent = language.fr.first_step;
  } else if (window.location.hash == "#eng") {
    typewriter.stop();
    first_step.textContent = language.eng.first_step;
  };
};

// ################################################################################################################## LANGUAGE HASH

// Check if a hash value exists in the URL-----------------------------------------------------------
if (window.location.hash) {
  // Set the content of the webpage depending on the hash value
  if (window.location.hash == "#fr") {
    title1.textContent = language.fr.title1;
    submit_button.textContent = language.fr.submit_button;
    skip_button.textContent = language.fr.skip_button;
    stop_button.textContent = language.fr.stop_button;
    restartbutton.textContent = language.fr.restartbutton;
    skip_last.textContent = language.fr.skip_last;
    celebrate.textContent = language.fr.celebrate;
    sad.textContent = language.fr.sad;
    typewriter.pauseFor(2000).typeString(language.fr.first_step).start();
  } else if (window.location.hash == "#eng") {
    title1.textContent = language.eng.title1;
    submit_button.textContent = language.eng.submit_button;
    skip_button.textContent = language.eng.skip_button;
    stop_button.textContent = language.eng.stop_button;
    restartbutton.textContent = language.eng.restartbutton;
    skip_last.textContent = language.eng.skip_last;
    celebrate.textContent = language.eng.celebrate;
    sad.textContent = language.eng.sad;
    typewriter.pauseFor(2000).typeString(language.eng.first_step).start();
  };
};


// ######################################################################################################################### BUTTON

// Button continue -------------------------------------------------------------------------------
function continue_button() {
  document.getElementById("text_disappear").style.display = "none";
  document.getElementById("notvisible").style.visibility = "visible";
};

// Button stop -----------------------------------------------------------------------------------
function delete_text() {
  var text_disappear = document.getElementById("text_disappear");

  var typewriter = new Typewriter(text_disappear, {
    loop: false,
    delay: 45,
    autoStart: false,
  });

  typewriter.deleteAll();

  if (window.location.hash == "#fr") {
    typewriter.typeString("Je suis désolée que ça arrive...").start();
  } else if (window.location.hash == "#eng") {
    typewriter.typeString("Sorry to hear that...").start();
  };

  var el = document.getElementById("restartbutton");
  el.style.visibility = "visible";
};

// Button restart --------------------------------------------------------------------------------
function restart_button() {
  document.location.reload();
};


// ######################################################################################################### TYPEWRITER LAST EFFECT

// setting up TypeWriter for last_step text effect------------------------------------------------------------
var last_step = document.getElementById("last_step");

var typewriter_last = new Typewriter(last_step, {
  loop: false,
  delay: 45,
});

// // Button to skip typewriter animation---------------------------------------------------------------
function skip_last_button() {
  document.getElementById("skip_last");
  if (window.location.hash == "#fr") {
    typewriter_last.stop();
    last_step.textContent = language.fr.last_step;
  } else if (window.location.hash == "#eng") {
    typewriter_last.stop();
    last_step.textContent = language.eng.last_step;
  };
};

if (window.location.hash) {
  // Set the content of the webpage depending on the hash value
  if (window.location.hash == "#fr") {
    typewriter_last.pauseFor(2000).typeString(language.fr.last_step).start();
  } else if (window.location.hash == "#eng") {
    typewriter_last.pauseFor(2000).typeString(language.eng.last_step).start();
  };
};


// ##################################################################################################################### TITLE AJAX

// Title animation using ajax---------------------------------------------------------------------
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml12 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: ".ml12 .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i,
  });

// ############################################################################################################### RANDOM FINAL GIF

function random_celebrate_func(){

  var random_celebrate = [
    "img/celebrate1.gif",
    "img/celebrate2.gif",
    "img/celebrate3.gif",
    "img/celebrate4.gif",
  ];

  var celebrate_gif = Math.floor(Math.random()*random_celebrate.length);  

  document.getElementById("skip_last").style.display = "none";
  document.getElementById("last_restart").style.visibility = "visible";

  document.getElementById("celebrate").innerHTML = '<img src="'+random_celebrate[celebrate_gif]+'" />';
  document.getElementById("sad").style.display = "none";
};

function random_sad_func(){

  var random_sad = [
    "img/sad1.gif",
    "img/sad2.gif",
    "img/sad3.gif",
    "img/sad4.gif",
  ];

  var sad_gif = Math.floor(Math.random()*random_sad.length);  
  

  document.getElementById("skip_last").style.display = "none";
  document.getElementById("last_restart").style.visibility = "visible";

  document.getElementById("sad").innerHTML = '<img src="'+random_sad[sad_gif]+'" />';
  document.getElementById("celebrate").style.display = "none";
};


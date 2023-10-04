// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");

// Variables for pre-defined arrays
const nouns1Array = ["The car", "The book", "The mountain", "The guitar", "The sun"];
const verbsArray = ["drove", "read", "climbed", "played", "admired", "hugged"];
const adjectivesArray = ["an old", "a mysterious", "a cheerful", "a shiny", "a curious", "a fluffy"];
const nouns2Array = ["house", "tiger", "star", "river", "cake"];
const settingsArray = ["under the bridge", "in the forest", "on a cloud", "beside the waterfall", "at the beach", "in the heaven"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    const noun1 = nouns1Array[noun1Count];
    chosenNoun1.textContent = noun1;

    // if-else to change count setting
    if (noun1Count < nouns1Array.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
}

function verb_on_click() {
    const verb = verbsArray[verbCount];
    chosenVerb.textContent = verb;

    if (verbCount < verbsArray.length - 1) {
        verbCount++;
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    const adjective = adjectivesArray[adjectiveCount];
    chosenAdjective.textContent = adjective;

    if (adjectiveCount < adjectivesArray.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    const noun2 = nouns2Array[noun2Count];
    chosenNoun2.textContent = noun2;

    if (noun2Count < nouns2Array.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
}

function setting_on_click() {
    const setting = settingsArray[settingCount];
    chosenSetting.textContent = setting;

    if (settingCount < settingsArray.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    const story = `Once, ${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}.`;
    document.getElementById("story").textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = nouns1Array[Math.floor(Math.random() * nouns1Array.length)];
    const randomVerb = verbsArray[Math.floor(Math.random() * verbsArray.length)];
    const randomAdjective = adjectivesArray[Math.floor(Math.random() * adjectivesArray.length)];
    const randomNoun2 = nouns2Array[Math.floor(Math.random() * nouns2Array.length)];
    const randomSetting = settingsArray[Math.floor(Math.random() * settingsArray.length)];

    const story = `Once, ${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}.`;
    document.getElementById("story").textContent = story;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

const pets = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐽",
  "🐸",
  "🐵",
  "🙈",
  "🙉",
  "🙊",
  "🐒",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🦟",
  "🦗",
  "🕷️",
  "🕸️",
  "🦂",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
  "🐆",
  "🦓",
  "🦍",
  "🦧",
  "🐘",
  "🦛",
  "🦏",
  "🐪",
  "🐫",
  "🦒",
  "🦘",
  "🐃",
  "🐂",
  "🐄",
  "🐎",
  "🐖",
  "🐏",
  "🐑",
  "🐐",
  "🦙",
  "🦌",
  "🐕",
  "🐩",
  "🐈",
  "🐓",
  "🦃",
  "🦚",
  "🦜",
  "🦢",
  "🦩",
  "🕊️",
  "🐇",
  "🦝",
  "🦨",
  "🦡",
  "🦦",
];

const petNames = [
  "Buddy",
  "Matty",
  "Charlie",
  "Lucy",
  "Bailey",
  "Cooper",
  "Sadie",
  "Milo",
  "Lola",
  "Rocky",
  "Daisy",
  "Teddy",
  "Molly",
  "Oliver",
  "Luna",
  "Tucker",
  "Sophie",
  "Leo",
  "Bella",
  "Jack",
  "Coco",
  "Zeus",
  "Roxy",
  "Winston",
  "Ruby",
  "Oscar",
  "Rosie",
  "Bentley",
  "Penny",
  "Sammy",
  "Lily",
  "Bear",
  "Chloe",
  "Gus",
  "Mia",
  "Charlie",
  "Zoe",
  "Duke",
  "Lily",
  "Harley",
  "Stella",
  "Jax",
  "Abby",
  "Murphy",
  "Gracie",
  "Finn",
  "Cali",
  "Henry",
  "Maggie",
  "Riley",
  "Millie",
  "Archie",
  "Nala",
  "George",
  "Sasha",
  "Lucky",
  "Zara",
  "Marley",
  "Coco",
  "Apollo",
  "Hazel",
  "Simba",
  "Piper",
  "Brody",
  "Willow",
  "Ace",
  "Olive",
  "Rocco",
  "Cleo",
  "Toby",
  "Honey",
  "Maximus",
  "Nova",
  "Bruno",
  "Pepper",
  "Thor",
  "Ginger",
  "Koda",
  "Dixie",
  "Shadow",
  "Loki",
  "Callie",
  "Ollie",
  "Misty",
  "Zeke",
  "Lulu",
  "Bandit",
  "Nina",
  "Rusty",
  "Pearl",
];

const petsContainer = document.querySelector("#pets-container");
function shuffleArray(pets) {
  // Make a copy of the original array to avoid modifying it directly
  const shuffledArray = pets.slice();

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

function shufflename(petNames) {
  // Make a copy of the original array to avoid modifying it directly
  const shuffledNames = petNames.slice();

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
  }

  return shuffledNames;
}

const shuffledNames = shufflename(petNames);

const shuffledArray = shuffleArray(pets);

function displayRandomMessage() {
  let deadmessages = [
    "May their soul find eternal joy in the afterlife.",
    "You'll be missed, dear friend.",
    "Rest in peace, sweet pet.",
    "Goodbye, faithful companion.",
    "Farewell, little one.",
    "went to a better place.",
    "gone too soon.",
    "rest with Angels.",
    "Untill we meet again",
    "died because of hunger or lack of love",
    "lived a happy life, now dead",
    "he left his paw prints on our hearts.",
    "Now in the place where he wont be suffering",
  ];
  const messages = document.createElement("p");
  messages.textContent = `${
    deadmessages[Math.floor(Math.random() * deadmessages.length)]
  }`;

  return messages;
}

let currentIndex = 0;
let nameIndex = 0;

function firstAnimal() {
  const message = document.querySelector("#message");
  const div = document.createElement("div");
  div.className = "pets-frame";

  const emoji = document.createElement("p");
  emoji.textContent = shuffledArray[currentIndex];
  emoji.style.fontSize = "50px";
  emoji.style.marginTop = "0px";
  emoji.style.marginBottom = "5px";
  div.appendChild(emoji);
  emoji.addEventListener("click", function () {
    loveBar = 100;
    progressBar2.style.width = `${loveBar}%`;
  });

  const name = document.createElement("p");
  name.textContent = shuffledNames[nameIndex];
  name.style.fontWeight = "bold";
  name.style.marginTop = "5px";
  name.style.fontSize = "20px";
  nameIndex++;
  div.appendChild(name);

  const hunger = document.createElement("p");
  hunger.textContent = "Hunger: ";
  div.appendChild(hunger);

  // Progress bar container
  const progressBarContainer = document.createElement("div");
  progressBarContainer.className = "progress-bar-container";
  const progressBarContainer2 = document.createElement("div");
  progressBarContainer2.className = "progress-bar-container2";

  // Progress bar
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  progressBar.style.width = "0% ";
  progressBarContainer.appendChild(progressBar);
  let hungerBar = 0;
  // pet dieing
  let hungerloveInterval = setInterval(function () {
    if (hungerBar === 100 || loveBar === 0) {
      div.replaceChildren();
      div.style.backgroundColor = "red";
      div.style.borderRadius = "0px";
      div.style.height = "200px";
      div.style.textAlign = "center";
      div.appendChild(emoji);
      let messages = displayRandomMessage();
      div.appendChild(messages);
      clearInterval(hungerloveInterval); //will stop the hungerbar
      clearInterval(intervalId); //stoping the function from generating cards
    } else {
      hungerBar += 1;
      progressBar.style.width = `${hungerBar}%`;
      loveBar -= 1;
      progressBar2.style.width = `${loveBar}%`;
    }
  }, 1000);
  let loveBar = 100;
  // ends here
  // Append progress bar container under hunger
  div.appendChild(progressBarContainer);

  const love = document.createElement("p");
  love.textContent = "Love: ";
  div.appendChild(love);
  // Progress bar for love
  const progressBar2 = document.createElement("div");
  progressBar2.className = "progress-bar2";

  progressBar2.style.width = Math.min(pets.love, 100) + "%";
  progressBarContainer2.appendChild(progressBar2);
  div.appendChild(progressBarContainer2);

  const button = document.createElement("button");
  button.style.marginTop = "10px";
  button.style.height = "28px";
  button.textContent = "Feed me 🥣";

  button.addEventListener("click", function () {
    hungerBar = 0;
    progressBar.style.width = `${hungerBar}%`;
  });
  div.appendChild(button);

  petsContainer.appendChild(div);
}

firstAnimal();
currentIndex++;

function displayArray() {
  if (currentIndex < pets.length) {
    firstAnimal(); // Call the function to create a new animal element
    currentIndex++;
  } else {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(displayArray, 10000);

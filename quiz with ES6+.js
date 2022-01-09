const readlineSync = require('readline-sync');

const playerName = readlineSync.question("Enter your Name: ");

console.log(`Welcome ${playerName} !!`);
console.log("Let's see how well do you know Brookly Nine Nine")
console.log("---------------------")
console.log("Let's Begin")
console.log("---------------------")

const score = 0
const highestScore = [

  {
    name: "Maitra",
    theirScore: 10
  },

  {
    name: "Rhutvi",
    theirScore: 8
  }
]


const questions = [
  {
    que: "For the Halloween heist episodes, the cast doesn't know who's going to win until they start filming. \n a. yes \n b. no \n",
    ans: "a"
  },

  {
    que: "Who is Jake's Role Model?: \n a. Terry \n b. john mcclane \n ",
    ans: "b"
  },

  {
    que: "Where did Terry once live(county) when pursuing a college education?: \n a. india \n b. japan \n ",
    ans: "b"
  },

  {
    que: "What is Jake's favorite movie?: \n a. die hard \n b. pulp fiction \n",
    ans: "a"
  },

  {
    que: "Who is Amy's hopless romantic admirer: \n a. teddy \n b. gina \n",
    ans: "a"
  },

  {
    que: "Who is Jake Peralta's Arch Nemesis: \n a. disco strangler \n b. doug judy \n",
    ans: "b"
  },

  {
    que: "Who is Charles Boyle's Arch Nemesis: \n a. sergeant peanut butter \n b. trick question, he solves all his cases \n",
    ans: "a"
  },

  {
    que: "Terry Crews originally started chanting NINE NINE to cheer up the actors?: \n a. yes \n b. no \n",
    ans: "a"
  },

  {
    que: "How many brothers does Amy have?: \n a. 8 \n b. 7 \n",
    ans: "b"
  },

  {
    que: "TELL ME WHY! Ain't nothing but a heartache... TELL ME WHY! Ain't nothing but a mistake...: \n a. I never want to hear you say... \n b. now number five \n",
    ans: "b"
  }

]

const play = currentQue => {
  const userAns = readlineSync.question(currentQue.que)
  if (userAns.toUpperCase() === currentQue.ans.toUpperCase()) {
    console.log("You are correct !!")
    score = score + 1;
    console.log(`Your current Score: ${score}`);
    console.log("---------------------")
  }
  else {
    console.log("You are incorrect :(")
    console.log(`Your current Score: ${score}`);
    console.log("---------------------")
  }
}

questions.map(play);

console.log(`Your final score is: ${score}`);
console.log("---------------------")
console.log("Share this and challenge your friends who claim to know Brookly Nine Nine better than you")

if (score === questions.length) {
  console.log("---------------------")
  console.log(" Yaaay !! you score FULL MARKS !!")
}

console.log("---------------------");
console.log("Check out the Leaderboard: ", highestScore)
console.log("---------------------")
console.log("Screenshot me your score to take your position on the Leaderboard")
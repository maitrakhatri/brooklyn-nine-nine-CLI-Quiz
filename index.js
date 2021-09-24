var readlineSync = require('readline-sync');

var playerName = readlineSync.question("Enter your Name: ");

console.log("Welcome " + playerName + " !!")
console.log("Let's see how well do you know Brookly Nine Nine")
console.log("---------------------")
console.log("Let's Begin")
console.log("---------------------")

var score = 0
var highestScore = [

  {
    name: "Maitra",
    theirScore: 10
  },

  {
    name: "Rhutvi",
    theirScore: 8
  }
]


var questions = [
  {
    que: "For the Halloween heist episodes, the cast doesn't know who's going to win until they start filming. yes or no ",
    ans: "yes"
  },

  {
    que: "Who is Jake's Role Model?: ",
    ans: "john mcclane"
  },

  {
    que: "Where did Terry once live(county) when pursuing a college education?: ",
    ans: "japan"
  },

  {
    que: "What is Jake's favorite movie?: ",
    ans: "die hard"
  },

  {
    que: "Who is Amy's hopless romantic admirer: ",
    ans: "teddy"
  },

  {
    que: "Who is Jake Peralta's Arch Nemesis: ",
    ans: "doug judy"
  },

  {
    que: "Who is Charles Boyle's Arch Nemesis: ",
    ans: "sergeant peanut butter"
  },

  {
    que: "Terry Crews originally started chanting NINE NINE to cheer up the actors?: yes or no ",
    ans: "yes"
  },

  {
    que: "How many brothers does Amy have?: ",
    ans: "7"
  },

  {
    que: "TELL ME WHY! Ain't nothing but a heartache... TELL ME WHY! Ain't nothing but a mistake...: ",
    ans: "now number five"
  }



]



function play(currentQue) {
  var userAns = readlineSync.question(currentQue.que)
  if (userAns.toUpperCase() === currentQue.ans.toUpperCase()) {
    console.log("You are correct !!")
    score = score + 1;
    console.log("Your current Score: ", score)
    console.log("---------------------")
  }
  else {
    console.log("You are incorrect :(")
    console.log("Your current Score: ", score)
    console.log("---------------------")
  }
}

for (i = 0; i < questions.length; i++) {
  var currentQue = questions[i];
  play(currentQue)
}

console.log("Your final score is: ", score)
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
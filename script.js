let message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = document.querySelector('.score');
const title = document.querySelector('.title');
let value = 0; 
let initialScore = 20; 
const highScore = document.querySelector('.highscore');
const image = document.querySelector('img');
const input = document.querySelector('.photo-input');
document.querySelector('.again').style.visibility = 'hidden';


input.addEventListener("change", () => {
    const checkBtn =document.querySelector('.check');
    const file = input.files[0];
    if (file) {
      image.src = URL.createObjectURL(file);
      checkBtn.disabled = false; // Enable the button if a file is selected
      const mess = document.querySelector('h3');
      mess.style.visibility = 'hidden';
    } else {
      checkBtn.disabled = true; // Disable the button if no file is selected
    }
  });

document.querySelector('.check').addEventListener
('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    // When there is invalid input(0)
    if (guess === 0) {
        const checkBtn =document.querySelector('.check');
        message.textContent = "Zero doesn't play";
        document.body.style.backgroundColor = 'red';
        checkBtn.disabled = true;
        checkBtn.style.backgroundColor = 'black';
        document.querySelector('.again').style.visibility = 'visible';
        checkBtn.textContent = "Disable";
        checkBtn.style.color = 'white';
        // When there is invalid input(negative number)
    } else if (guess < 0) {
        const checkBtn =document.querySelector('.check');
        message.textContent = "Guess Can't be Negative Number";
        document.body.style.backgroundColor = 'red';
        checkBtn.disabled = true;
        checkBtn.style.backgroundColor = 'black';
        document.querySelector('.again').style.visibility = 'visible';
        checkBtn.textContent = "Disable";
        checkBtn.style.color = 'white';
    // When Number is guessed
    } else if (guess === secretNumber) {
        const checkBtn = document.querySelector('.check');
        message.textContent = "Correct Number🎂"
        document.body.style.backgroundColor = 'green';
        document.querySelector('.again').style.visibility = 'visible';
        checkBtn.disabled = true;
        checkBtn.textContent = "🎁🎁🎁";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score.textContent > highScore.textContent) {
            highScore.textContent = score.textContent;
        }
        // When guess is too high
    } else if (guess > secretNumber) {
        if (score.textContent > 1) {
            message.textContent = "Too High 🤷‍♂️"
            score.textContent--;
        } else {
            message.textContent = "You lost the game! 😭";
            document.body.style.backgroundColor = 'red';
            document.querySelector('.again').style.visibility = 'visible';
        }
        // when guess is too low
    } else if (guess < secretNumber) {
        if (score.textContent > 1) {
            message.textContent = "Too Low 🤷‍♂️"
            score.textContent--;
        } else {
            message.textContent = "You lost the game! 😭";
            document.body.style.backgroundColor = 'red';
            document.querySelector('.again').style.visibility = 'visible';
        }
    }
} );

document.querySelector('.again').addEventListener
('click', () => {
    const checkBtn = document.querySelector('.check');
    checkBtn.disabled = false;
    message.textContent = "Start guessing...";
    document.body.style.backgroundColor = '#222';
    document.querySelector('.guess').value = value;
    score.textContent = initialScore;
    //Check button styling
    checkBtn.textContent = 'Check!';
    checkBtn.style.border = 'none';
    checkBtn.style.backgroundColor = '#eee';
    checkBtn.style.color = '#222';
    checkBtn.style.fontSize = '2rem';
    checkBtn.style.fontFamily = 'inherit';
    checkBtn.style.padding = '2rem 3rem';
    checkBtn.style.cursor = 'pointer';
    //Check button styling
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
})



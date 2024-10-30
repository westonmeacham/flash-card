const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

let words = {
    Hello: "Iakwe",
    Goodbye: "Jerramon",
    "I love you": "Ij Iakwe Eok"
}

let data = Object.entries(words)

function getRandomTerm() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    console.log(randomTerm);
}

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
    console.log("You clicked the next button")
});

getRandomTerm()

const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

let words = {
    Hello: "Iakwe",
    Goodbye: "Jeraamman",
    "I love you": "Ij Iakwe Eok",
    Hope: "Kõjatdarikrik",
    "How are you": "Ej et am mour",
    Yes: "Aet",
    No: "Jab",
    "My name is": "Eta in",
    Sorry: "Jolok bõd"
};

data = Object.entries(words);

function getRandomWord() {
    let randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
    definition.style.display = 'none'; // hide the definition when new term is shown
}

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
    getRandomWord();
});


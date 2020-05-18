const job = document.querySelector('.job');
const cursor = document.querySelector('.cursor');
const txt = ["I'm Web Developer", "I'm software engineer", "I'm Web Designer"]
let activePhrase = txt[0];
let i = 0;
let e = 0;

const changePhrase = () => {
    // console.log('changePhrase');
    e++;
    job.textContent = '';
    if (e < txt.length) {
        activePhrase = txt[e];
        i = 0;
        addLetter();
    } else {
        e = 0;
        activePhrase = txt[e];
        i = 0;
        addLetter();
    };
}

const addLetter = () => {
    if (i < activePhrase.length) {
        job.textContent += activePhrase[i];
        // console.log(activePhrase);
        setTimeout(addLetter, 100);
        i++;
    } else setTimeout(changePhrase, 2000);
}


addLetter(); //pierwsze wywołanie


// Animacja kursora
const cursorAnimation = () => {
    cursor.classList.toggle('active');
}
setInterval(cursorAnimation, 800);